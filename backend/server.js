require('dotenv').config({ path: "../.env" });
const cors = require("cors");

const express = require('express');
const app = express();
const weatherRoutes = require('./routes/weather');
const userRoutes = require('./routes/user');
const mongoose = require('mongoose');

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(cors({
    origin: process.env.REACT_APP_FRONTEND_LINK,
    methods: ["GET", "POST", "PUT", "DELTE"],
    allowedHeaders: ["Content-type", "Authorization"],
    credentials: true,
    preflightContinue: true
}));

app.options("*", cors());

//app.use(cors());

//routes
app.use('/api/weather', weatherRoutes);
app.use('/api/user', userRoutes);

//connecting to DB
mongoose.connect(process.env.REACT_APP_MONGODB)
    .then(() => {
        app.listen(process.env.REACT_APP_PORT, () => {
            console.log(`Sucesfully connected to DB with server running on PORT ${process.env.REACT_APP_PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })