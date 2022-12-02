const { products } = require('../products/products.js')

function getByCategory(req, res, next) {
  const licence = req.params.name;
  const productsByCategory = products.filter(e=>e.licence.toLowerCase() === licence)
  if(productsByCategory.length < 1) return res.status(404).json({msg:'Categoria no encontrada'})
  return res.json(productsByCategory)
};

module.exports = {
  getByCategory,
};