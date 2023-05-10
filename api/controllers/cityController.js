const City = require('../models/cityModel');
const mongoose = require('mongoose');

const getCities = async (req, res) => {

    //const user_id = req.user._id;

    try {
        const allCities = await City.find({});
        res.status(200).json(allCities);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getCity = async (req, res) => {

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "There is no saved city like this"})
    }

    const city = await City.findById(id);

    if (!city) {
        return res.status(404).json({error: "There is no saved city like this"})
    }

    res.status(200).json(city);
}

const addCity = async (req, res) => {

    const { city, city_country, user_id} = req.body;

    try {
        const favoriteCity = await City.create({ city, city_country, user_id});
        res.status(200).json(favoriteCity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteCity = async (req, res) => {

    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "There is no saved city like this"})
    }

    const deletedCity = await City.findByIdAndDelete(id);

    if (!deletedCity) {
        return res.status(404).json({error: "There is no saved city like this"})
    }

    res.status(200).json(deletedCity);

}

module.exports = { getCities, getCity, addCity, deleteCity };