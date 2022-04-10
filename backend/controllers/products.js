const Product = require('../models/Product')

exports.postProductData = (req, res, next) => {
    const cb = (response) => {
        res.send(JSON.stringify(response))
    }
    const dataFromUser = req.body

    Product.register(dataFromUser, cb)
};

exports.getAllProducts = (req, res, next) => {
    const cb = (response) => {
        res.send(JSON.stringify(response))
    }

    Product.getAllProducts(cb)
};

exports.getCategories = (req, res, next) => {
    const cb = (response) => {
        res.send(JSON.stringify(response))
    }

    Product.getCategories(cb)
};

exports.deleteProduct = (req, res, next) => {
    const cb = (response) => {
        res.send(JSON.stringify(response))
    }
    const { id } = req.body

    Product.deleteProductByID(id, cb)
};