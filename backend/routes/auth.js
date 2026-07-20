const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const db = require('../db/db_connection.js');
const express = require('express');
const router = express.Router();
const {validateEmail, authToken} = require("../middleware/authMiddleware.js"); 
const pool = require('../db/db_connection.js')
require('dotenv').config()
//Checks if users exists check DB
//Function to check valid email input
//Check length
// needs to make a thing that logins if token is good
// make a thing that refresehes and generates token 
// logout dleete tokens after user logs out

router.post('/register', validateEmail, async (req, res) => {
    const { email, password } = req.body; 
    
    try {
      const checkUser = await pool.query(
        'SELECT 1 FROM users WHERE email = $1 LIMIT 1',
        [email]
      );

      if (checkUser.rows.length > 0) {
        return res.status(409).json({message: "User already exist"})
      }
    } catch (error) {
      console.error("Full Error Object:", error);
      console.error("Error Message:", error.message);
      return res.status(500).json({error: "Database error"})
    }
    
    try {
      //TODO: The checker below does not work passwrod less than 14 character work
      if (!password.length >= 14) {
      return res
      .status(400)
      .json({success: false, error: "Invalid Password"})
    } else {
      res.status(200).json({
        message: 'User registered successfully',
        email: email
    })}

      // Hash password
      const saltRound = 10;
      const hashedPassword = await bcrypt.hash(password, saltRound);
      
      // Store user in database
      const sql = (`INSERT INTO users (email, password) VALUES ($1,$2)`);
       db.query(sql, [email, hashedPassword], (err, result) =>  { 
         if (err) {
           console.error(err);
           return res.status(500).json({error: "Database queryfailed"});
         } else {
          res.status(201).json({ message: 'User stored successfully'})
         }
       })
    } catch(error) {
      console.error("Full Error Object:", error);
      console.error("Error Message:", error.message);
      res.status(400).json({ message:"Failed to encrypt password"})
    }
});

router.post('/login', async (req, res) => {

  // Safely try to read and lowercase the email (DB will be cases sensitive without this)
    const email = req.body.email?.toLowerCase();  
    const password = req.body.password;

    // Checks if user exists
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    
    // Returns user
    const user = result.rows[0];

    // User does not exist
    if (!user) {
      return res.status(401).json({
        message: "Invalid Credentials"
      })
    }

    // Checks password 
    const valid = await bcrypt.compare(
      password,
      user.password
    );
    
    if (!valid) {
      return res.status(401).json({
        message: "Invalid Password"
      })
    }

    const payload = {
      UserId: user.id,
      email: user.email
    }

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: "1h"
      }
    );
    
    res.json({ 
      message: 'Login Successfully',
      token: token 
    });
})



module.exports = router

