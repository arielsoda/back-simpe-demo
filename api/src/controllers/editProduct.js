const { products } = require('../products/products.js')


function editProduct(req, res, next) {
    const id = Number(req.query.id);
    const action = req.query.action;
    const productEdit = products.find(e => e.id === id)
    if (productEdit.stock < 1 && action === 'restar') return res.json({ msg: 'No hay mas Stock' })
    if (action === 'restar') {
        productEdit.stock = productEdit.stock - 1
        return res.json({msg:`Se ha restado 1 producto del stock, quedan ${productEdit.stock} prodcutos disponibles`})
    } else {
        productEdit.stock = productEdit.stock + 1
        return res.json({msg:`Se ha sumado 1 producto al stock, quedan ${productEdit.stock} prodcutos disponibles`})
    }

};




module.exports = {
    editProduct,
};