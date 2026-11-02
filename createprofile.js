const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    qualification: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 100,
        trim: true
    },
    Address: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 200,
        trim: true
    },
    skills: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 200,
        trim: true
    },
    resume: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Profile', profileSchema);