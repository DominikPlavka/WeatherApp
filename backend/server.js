require('dotenv').config({ path: "../.env" });

const express = require('express');
const app = express();
const weatherRoutes = require('./routes/weather')

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/weather', weatherRoutes);

//listen
app.listen(process.env.REACT_APP_PORT, () => {
    console.log(`Server is running on PORT ${process.env.REACT_APP_PORT}`)
});
