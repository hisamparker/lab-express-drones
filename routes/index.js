const express = require('express');
const router = express.Router();
const fileUploader = require('../configs/cloudinary.config');

/* GET home page */
router.get('/', (req, res, next) => res.render('index', { title: 'Drnz' }));

module.exports = router;
