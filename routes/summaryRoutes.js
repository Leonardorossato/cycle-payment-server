const express = require('express');
const payment = require('../models/paymentModel')
const router = express.Router();

router.post('/sumarry', (req, res) => {
    payment.aggregate({
        $project : {credits : {$sum : "$credits.value"}, debits : {$sum : "$debits.value"}}
    }, {
        $group : {_id: null, credit: {$sum: "credit"}, debit: {$sum: "debit"}}        
    }, {
        $project : {_id: 0, credit: 1, debit: 1 }
    }, (err, res) => {
        if(err) {
            res.status(500).json('Error to aggregate the sumarry' +err)
        }
        return res.status(200).json('Summary successfuly add' + res[0] || {credit: 0, debit: 0})
    })
})

module.exports = router;