const express = require('express');
const payment = require('../models/paymentModel')
const router = express.Router();

router.get('/count', (req, res) =>{
    payment.count((error, value) =>{
        if(error){
            res.status(500).json('Error to find the count : ' + error)
        }
        return res.status(200).json('Find the value : ' + value)
    })
})

module.exports = router;