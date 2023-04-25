const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    city: {
        type: String,
        required: true,
        unique: true
    },
    user_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('City', citySchema);