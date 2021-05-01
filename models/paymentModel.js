const resful = require('node-restful');
const mongoose = resful.mongoose;

const creditsSchema = new mongoose.Schema({
    name: { type: String, required: true},
    value: { type: Number, min: 0, required: true}
})

const debitSchema = new mongoose.Schema({
    name: { type: String, required: true},
    value: { type: Number, min: 0, required: [true, 'Inform the value of the debit!']},
    status: { type: String, required: false, uppercase: true},
    enum: ['PAIDOUT', 'PENDENT', 'SCHEDULED']
})

const paymentSchema = new mongoose.Schema({
    name: { type: String, required: true},
    month: { type: Number, min: 1, max: 12, required: true},
    year: { type: Number, min: 1970, max: 2200, required: true},
    credits: [creditsSchema],
    debits: [debitSchema]
})

module.exports = resful.model('payment', paymentSchema)

