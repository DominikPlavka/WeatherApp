const express = require('express');
const router = express.Router();

const { addCity, deleteCity } = require ('../controllers/cityController');

//adding city
router.post('/', addCity);

//deleting city
router.delete('/:id', deleteCity);

module.exports = router;