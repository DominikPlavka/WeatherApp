require('dotenv').config({ path: "../.env" });
const cors = require("cors");

const express = require('express');
const app = express();
const cityRoutes = require('./routes/city');
const userRoutes = require('./routes/user');
const mongoose = require('mongoose');

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(cors({
    origin: process.env.REACT_APP_FRONTEND_LINK,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-type", "Authorization"],
    credentials: true,
    preflightContinue: true
}));

app.options("*", cors());

//routes
app.use('/api/user', userRoutes);
app.use('/api/city', cityRoutes);

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

module.exports = app;