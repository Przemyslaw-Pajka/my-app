const express = require('express');
const productsController = require('../controllers/products')
const router = express.Router();

router.post('/get-categories', productsController.getCategories);

module.exports = router;