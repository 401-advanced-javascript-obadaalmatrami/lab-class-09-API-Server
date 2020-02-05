'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
}, { toObject: { virtuals: true }, toJSON: { virtuals: true } });


module.exports = mongoose.model('categories', categories);