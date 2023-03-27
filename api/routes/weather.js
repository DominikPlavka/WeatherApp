const express = require('express');
const router = express.Router();

//get intro data
router.get('/', (req, res) => {
    res.json({mssg: "Here should be the weather listed"})
})

//get a single data based on long, lat
router.get('/:id', (req, res) => {
    res.json({msg: 'Single data'})
}) 

module.exports = router;