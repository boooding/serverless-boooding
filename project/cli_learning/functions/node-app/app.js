const express = require('express')
const app = new express();

app.use('/users', (req, res) => {
    res.send('users');
})

module.exports = app;