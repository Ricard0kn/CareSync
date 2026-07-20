const cors = require('cors')
const express = require('express');
const auth = require('./routes/auth');
const validateEmail = require('./middleware/authMiddleware');
const app = express();
const port = 3000;

app.use(express.json());

// Whitelist our frontend website to allow calling endnpoints (port number will change once final website is established)
app.use(cors({
  origin: ['https://localhost:5176', 'http://127.0.0.1:5176']
}))

app.post('/', (req, res) => {
    res.json({ message: 'Welcome to your index.js backend!'});
});

app.use('/api', auth)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log('Running...')
});