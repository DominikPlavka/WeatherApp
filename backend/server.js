require('dotenv').config({ path: "../.env" });

const express = require('express');
const app = express();

const weatherRoutes = require('./routes/weather')
const mongoose = require('mongoose');

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/weather', weatherRoutes);

//connecting to DB
mongoose.connect(process.env.REACT_APP_MONGODB_CONNECTION_STRING)
    .then(() => {
        app.listen(process.env.REACT_APP_PORT, () => {
            console.log(`Sucesfully connected to DB with server running on PORT ${process.env.REACT_APP_PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })
