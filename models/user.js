const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    work: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    posts: [postSchema],
})

module.exports = mongoose.model('User', userSchema);