const express = require('express');
const productsController = require('../controllers/products')
const router = express.Router();

router.post('/send', productsController.postProductData);

module.exports = router;