const mongoose = require('mongoose');

const creditsSchema = mongoose.Schema({
    name: { type: String, required: true},
    value: { type: Number, min: 0, required: true}
})

const Credits = mongoose.model('credits', creditsSchema)
module.exports = Credits