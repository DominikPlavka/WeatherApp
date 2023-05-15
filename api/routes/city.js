const express = require('express');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

const { addCity, deleteCity, getCities, getCity } = require ('../controllers/cityController');

router.use(requireAuth);

router.get('/', getCities);

router.get('/:id', getCity);

router.post('/', addCity);

router.delete('/:id', deleteCity);

module.exports = router;