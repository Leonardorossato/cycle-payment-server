const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    name: { type: String, required: true},
    month: { type: Number, min: 1, max: 12, required: true},
    year: { type: Number, min: 1970, max: 2200, required: true},
    creditsId: {type: mongoose.Schema.Types.ObjectId, ref: 'credits'},
    debitsId: {type: mongoose.Schema.Types.ObjectId, ref: 'debits'}
})
const Payment = mongoose.model('payment', paymentSchema)
module.exports = Payment

