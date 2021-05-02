const express = require('express');
const payment = require('../models/paymentModel')
const router = express.Router();

router.get('/', (req, res)=>{
    payment.find((err, data) =>{
        if(err){
            return res.status(500).json('Error to search the payments', err)
        }
        return res.status(200).json(data)
    })
})

router.post('/add', (req, res)=>{
    const name = req.body.name;
    const month = req.body.month;
    const year = req.body.year;
    const credits = [{
        name: req.body.name,
        value: req.body.value,
    }]
    debits = [{
        name: req.body.name,
        value: req.body.value,
        status: req.body.status
    }]

    const newPayment = new payment({
        name,
        month,
        year,
        credits: [],
        debits: []     
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
