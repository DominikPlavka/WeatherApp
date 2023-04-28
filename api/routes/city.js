const express = require('express');
const router = express.Router();

const { addCity, deleteCity, getCities, getCity } = require ('../controllers/cityController');

router.get('/', getCities);

router.get('/:id', getCity);

router.post('/', addCity);

router.delete('/:id', deleteCity);

module.exports = router;