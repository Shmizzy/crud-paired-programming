const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect(process.env.MONGODB_URI);

const User = require('./models/user.js');


app.get('/' , (req, res) => {
    res.render('homePage.ejs')
})


app.get('/create', (req, res) => {
    res.render('./account/create.ejs')
})



app.listen('3000', () => {
    console.log('the express app is running on port 3000');
})