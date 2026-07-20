const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const router = express.Router();
const pool = require('../db/db_connection')
//TODO: Setup transporter
//TODO: Update db with token

// transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// This will send password link with token
router.post('/forgotpassword', async (req, res) => {
    const email = req.body;

    try {

        const checkUser = await pool.query(
            'SELECT * FROM users WHERE email = $1 LIMIT $1'
            [email]
        )

        if (checkUser.rows.length > 0) {
            return res.status(200).json({message: "User exist"})
        }
    } catch (err){
        return res.status(400).json({message: "User does not exist"})
    }
});

router.post('/changepassword', async (req, res) => {

    const new_password = req.body.password;

    // Hash password
    const saltRound = 10
    const updateHashPassword = await bcrypt(new_password, saltRound)

    // TODO: 
    try {
        const updatePassword = pool.query(
        'UPDATE users SET password = $1 WHERE email = $2;'
        [new_password, email]
    )

    return res.status(409).json({message: "Password was updated sucessfully!"})

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({error: "Database Error"})
    }

});
