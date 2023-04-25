const City = require('../models/cityModel');

const addCity = async (req, res) => {
    const { city, user_id } = req.body;

    try {
        const favoriteCity = City.create({ city, user_id })
        res.status(200).json(favoriteCity);
    } catch {
        res.status(400).json({ error: error.message })
    }
}

const deleteCity = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCity = City.findByIdAndDelete(id)
        res.status(200).json(deletedCity);
    } catch {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { addCity, deleteCity };