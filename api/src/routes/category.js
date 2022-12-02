const {Router} = require('express');
const { getByCategory } = require('../controllers/getByCategory');

const router = Router();

router.get('/:name', getByCategory);

module.exports= router;