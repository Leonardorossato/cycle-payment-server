const express = require('express');
const Payment = require('../models/paymentModel')
const router = express.Router();

router.get('/', (req, res)=>{
    Payment.find((err, data) =>{
        if(err){
            return res.status(500).json('Error to search the payments', err)
        }
        return res.status(200).json(data)
    })
})

router.post('/add', (req, res)=>{
    let name = req.body.name;
    let month = Number(req.body.month);
    let year = Number(req.body.year);
    let value = Number(req.body.value);
    let status = req.body.status;

    let credit = {
        name,
        value
    }

    let debit = {
       ...credit,
        status
    }

    let newPayment = new Payment({
        name,
        month,
        year,
        credits: [credit],
        debits: [debit]
    });

    newPayment.save()
    .then(() => {
        res.status(201).json('New payment added successfuly')
    })
    .catch((error) => {
        res.status(400).json('Error to add a new payment' + error)
    })
})

module.exports = router;
