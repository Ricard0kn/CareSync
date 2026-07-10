import jwt require('jsonwebtoken');
const db = require('../db/db_connection.js');
const express = require('express');
const router = express.Router();
const validateEmail = require("../middleware/authMiddleware.js"); 
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
        return res.status(409).json({message: "Uesr already exist"})
      }
    } catch (error) {
      return res.status(500).json({error: "Database error"})
    }

    if (!password.length >= 14) {
      return res
      .status(400)
      .json({success: false, error: "Invalid Password"})
    } else {
      res.satus(200).json({
        message: 'User registered successfully',
        email: email
    })}
    
    try {
      // Hash password
      const saltRound = 10;
      const hashedPassword = await bcypt.hash(password, saltRound);
      
      // Store user in database
      const sql = (
        `
        INSERT INTO users (id, email, password) 
        VALUES ($1,$2)
        `;
       db.query(sql, [email, hashedPassword], (err, result) =>  { 
         if (err) {
           console.error(err);
           return res.status(500).json({error: "Databse queryfailed"});
         }
          
         res.status(201).json({
           message: 'User stored successfully'
         })
       })
      )
    }
});

router.post('/login', async (req, res) => {

    const email = req.body.email;

    // Checks if user exists
    const result = await pool.query(
      "SELECT * FROM users where email = $1"
      [email]
    );
    
    // User does not exist
    if (!user) {
      return res.status(401).json({
        message: "Invalid Credentials"
      })
    }
    
    // Returns user
    const user = result.rows[0];
    
    // Checks password 
    const valid = await bcrypt.compare(
      password,
      user.password
    )
    
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

