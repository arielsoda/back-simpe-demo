const { Router } = require('express');
// Importar todos los routers;
const Products = require('./products');
const Category = require('./category');


const router = Router();

// Configurar los routers
router.use('/products', Products);
router.use('/category', Category);


module.exports = router;
