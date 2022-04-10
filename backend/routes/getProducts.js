const express = require('express');
const productsController = require('../controllers/products')
const router = express.Router();

router.post('/get-products', productsController.getAllProducts);

module.exports = router;