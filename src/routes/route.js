const express = require('express');
const route = express.Router();






route.get('*', async function(req, res) {
    return res.send("Welcome")
});

module.exports = route;