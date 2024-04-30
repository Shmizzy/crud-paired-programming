const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const morgan = require('morgan')

mongoose.connect(process.env.MONGODB_URI);

const User = require('./models/user.js');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); 
app.use(methodOverride('_method'));
app.use(morgan('dev'));



app.get('/' , (req, res) => {
    res.render('homePage.ejs')
})


app.get('/account/new', (req, res) => {
    res.render('./account/new.ejs')
})

app.post('/account/new', async (req, res) => {
    const account = await User.create(req.body);
    res.redirect('/');
})




app.listen('3000', () => {
    console.log('the express app is running on port 3000');
})