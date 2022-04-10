const express = require('express');
const productsController = require('../controllers/products')
const router = express.Router();

router.post('/delete-product', productsController.deleteProduct);

module.exports = router;