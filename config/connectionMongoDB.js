const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.Error.messages.general.required = "The atribu '{PATH}' is required"

mongoose.connect('mongodb+srv://leozao:123456789leo@cycle-payment.1jwbe.mongodb.net/test', 
{useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connection successfuly with MongoDB')
})
.catch((error)=>{
    console.log('Something wrong with your MongoDB connection' + error)
})


