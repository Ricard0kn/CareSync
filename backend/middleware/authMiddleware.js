//Auth Middleware

const validator = require('validator');

const email = 'email@email.com';

const validateEmail = (req, res, next) => {

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

const function authenticationToken(req, res, next) {
  
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // Checks if head exist
  if (!token) {
    return res.status(401).json({ error: 'No credentials sent!'})
  }

  jwt.verify(token, process.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }

    req.user = decoded
    next();
  }); 

}

module.exports = validateEmail
