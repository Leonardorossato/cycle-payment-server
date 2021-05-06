const mongoose = require('mongoose');

const debitsSchema = mongoose.Schema({
    name: { type: String, required: true},
    value: { type: Number, min: 0, required: true},
    status: { type: String, required: false, uppercase: true,
    enum: ['PAIDOUT', 'PENDENT', 'SCHEDULED']}
})

const Debits = mongoose.model('debits', debitsSchema)
module.exports = Debits