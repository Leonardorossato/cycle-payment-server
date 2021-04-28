const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true}
})

const debitSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true},
    status: {type: String, required: false},
    enum: ['PAIDOUT', 'PENDENT', 'SCHEDULED']
})

const paymentCycleScheme = new mongoose.Schema({
    name: {type: String, required: true},
    months: {type: Number, min: 1, required: true},
    year: {type: Number, min: 1970, max: 2100, required: true},
    credits: [creditSchema],
    debits: [debitSchema]
})