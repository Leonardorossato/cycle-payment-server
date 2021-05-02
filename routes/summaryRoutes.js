const express = require('express');
const payment = require('../models/paymentModel')
const router = express.Router();

router.get('/summary', (req, res) => {
    payment.aggregate([
        {$project: {credit: {$sum: "credits.value"}, debit: {$sum: "debits.value"}}},
        {$group: {_id: null, credit: {$sum: "credit"}, debit: {$sum: "debit"}}},
        {$project: {_id: 0, credit: 1, debit: 1}}
    ], (err, result) => {
        if(err){
            return res.status(500).json('Error to get all summary' + {erros: [err]})
        }else{
            return res.status(200).json(result[0] || {credit: 0, debit: 0})
        }
    })
})


module.exports = router;