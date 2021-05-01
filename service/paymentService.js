const paymentModel = require("../models/paymentModel")


paymentModel.methods(['get', 'post', 'put', 'delete'])
paymentModel.updateOptions({new: true, runValidators: true})

module.exports = paymentModel