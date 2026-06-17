const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/' (req, res) => {
    res.json({ message: 'Welcome to your index.js backend!'});
});

