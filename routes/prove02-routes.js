const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'pages', 'prove02-index.html'));
});

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'pages', 'prove02-users.html'));
});

module.exports = router;