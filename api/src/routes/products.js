const {Router} = require('express');
const { getAllProducts } = require('../controllers/getAllProducts');
const { getById } = require('../controllers/getById');
const { editProduct } = require('../controllers/editProduct');

const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getById);
router.put('/', editProduct)

module.exports= router;