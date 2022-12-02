const { products } = require('../products/products.js')

function getAllProducts(req, res, next) {
    return res.json(products);
};

module.exports = {
    getAllProducts,
};