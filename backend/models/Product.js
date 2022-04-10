const fs = require('fs');
const pathToDB = 'db/products.json';
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    pathToDB
);

module.exports = class Product {
    static register(dataFromUser, cb) {
        return fs.readFile(p, (err, data) => {
            if (err) throw err;
            const dataDB = JSON.parse(data)

            const newData = [...dataDB]
            newData.push(dataFromUser);

            fs.writeFile(p, JSON.stringify(newData), (err) => {
                if (err) throw err;
            });
            cb({ products: newData, isProductCreated: true })
        });
    }
    static deleteProductByID(id, cb) {
        return fs.readFile(p, (err, data) => {
            if (err) throw err;
            const dataDB = JSON.parse(data)
            const newData = dataDB.filter((item) => {
                return id !== item.id
            })

            fs.writeFile(p, JSON.stringify(newData), (err) => {
                if (err) throw err;
            });

            cb(newData)
        });
    }
    static getAllProducts(cb) {
        return fs.readFile(p, (err, data) => {
            if (err) throw err;
            const dataDB = JSON.parse(data)

            cb(dataDB)
        });
    }
    static getCategories(cb) {
        return fs.readFile(p, (err, data) => {
            if (err) throw err;
            const dataDB = JSON.parse(data)
            console.log(data)
            let productCategories = [];

            dataDB.forEach((item) => {
                if (!productCategories.includes(item.category)) {
                    productCategories.push(item.category)
                }
            })

            cb(productCategories)
        });
    }
}

