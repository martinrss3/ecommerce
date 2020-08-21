const express = require('express');
const router = express.Router();
const categories = require('./models/Categories');

router.get('/', (req, res) => {
    res.send(categories)
})

module.exports = router;