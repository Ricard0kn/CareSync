import jwt from ('jsonwebtoken');

const express = require('express');
const router = express.Router();
const validateEmail = require(../middleware/authMiddleware.js);
//Register use creates 
//Checks if users exists check DB
//Function to check valid email input
//Check length
// needs to make a thing that logins if token is good
// make a thing that refresehes and generates token 
// logout dleete tokens after user logs out

router.post('/register', validateEmail, (req, res) => {
    
    const { email, password } = req.body; 
    
    if (!password >= 14) {
      return res
      .status(400)
      .json({success: false, error: "Invalid Password"})
}   else {
      req.satus(200).json({
        message: 'User registered successfully',
        email: email
        // Add to save to db
})
}
})

router.post('/login', async (req, res) => {
    const email = req.body.email;
    
    //Create Middleware that checks db to see if email is a valid user
    // Hash tokens crete a refresh token for user session
})

router.post('/forgotpassword' async (req, res) => {

})


module.exports = router

