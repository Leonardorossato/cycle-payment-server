const express = require('express');

module.exports = function(app){
    
    const router = express.Router();
    app.use('/api', router);

    const PaymentService = require('./service/paymentService');
    PaymentService.register(router , '/paymentModels');
    
}




