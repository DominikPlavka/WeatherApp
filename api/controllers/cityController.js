const City = require('../models/cityModel');

const getCities = async (req, res) => {

    const user_id = req.user._id;

    try {
        const allCities = await City.find(user_id);
        res.status(200).json(allCities);
    } catch {
        res.status(400).json({error: error.message});
    }
}

const getCity = async (req, res) => {

    const { city_id } = req.params;
    const city = await City.findById(city_id);

    res.status(200).json(city);
}

const addCity = async (req, res) => {

    const user_id = req.user._id;
    const { city, city_country } = req.body;

    try {
        const favoriteCity = await City.create({ city, city_country, user_id });
        res.status(200).json(favoriteCity);
    } catch {
        res.status(400).json({ error: error.message });
    }
}

const deleteCity = async (req, res) => {

    const { id_city } = req.params;

    try {
        const deletedCity = await City.findByIdAndDelete(id_city);
        res.status(200).json(deletedCity);
    } catch {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { getCities, getCity, addCity, deleteCity };