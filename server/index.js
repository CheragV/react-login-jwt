const express = require('express')
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Seting Environment variables
dotenv.config();

// Connecting to DB
mongoose.connect(process.env.DB_CONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => console.log('Mongo connection Successful'))


// Middleware to parse Body
app.use(express.json())

//Connecting to Routes
const Router = require('./routes');
app.use(Router)



// Firign up server
app.listen(5000, () => console.log('Server up and running'));