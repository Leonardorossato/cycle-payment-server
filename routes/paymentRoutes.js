const express = require('express');
const router = express.Router();
const payment = require('../models/paymentModel')

router.get('/', (req, res)=>{
    payment.find((err, data)=>{
        if(err){
            return res.status(500).json('Some error occurred to search all payments',  err)
        }

        return res.status(200).json('Payments successfully reloaded', data)
    })
})

router.post('/add/payment', (req, res)=>{
    try{
        const _payment = new Payment({
            name: req.body.name,
            month: Number(req.body.month),
            year: Number(req.body.year),
            credits: [{
                name: req.body.name,
                value: Number(req.body.value)
            }],
            debits: [{
                name: req.body.name,
                value: Number(req.body.value),
                status: req.body.status,
                enum: ['PAIDOUT', 'PENDENT', 'SCHEDULED']
            }]
        })

        payment.findOne().where(_payment).exec((err, data)=>{
            if(err){
                return res.status(400).json('Error to add a new Payment', err)
            }
            if(data === null){
                _payment.save((err, data)=>{
                    if(err){
                        return res.status(500).json('Error to add a new Payment',err)
                    }
                    return res.status(201).json('Payment added successfully', data)
                })
            }
        })
    }catch(err){
        console.log(error)
        throw Error()
    }
})

module.exports = router;
