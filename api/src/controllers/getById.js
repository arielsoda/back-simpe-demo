const { products } = require('../products/products.js')

function getById (req, res, next) {
    const id = Number(req.params.id);
    console.log(id);
    if(isNaN(id)) return res.status(406).json({error:`El id ingresado es incorrecto`})
    const product = products.find(e=>e.id === id)
    if(!product) return res.status(404).json({error:'El producto no fue enccontrado'})
    return res.json(product)
};

module.exports = {
    getById,
};