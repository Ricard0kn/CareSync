//Auth Middleware

const validator = require('validator');

const email = 'email@email.com';

const validateEmail(req, res, next) {

    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json(error: "Email is required")}
    
    const normalizedEmail = validator.normalizedEmail(email);

    if (!validator.isEmail(normalizedEmail)) {
      return res,status(400).json(error: "Invalid email format")
}
    req.body.email = normalizedEmail

    next();

}

module.exports = validateEmail
