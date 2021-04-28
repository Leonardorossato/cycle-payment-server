const express = require('express');
const app = express();
const PORT = 8000 || process.env.PORT
const bodyParser = require('body-parser')
const connectionMongoDB = require('./config/connectionMongoDB')

app.connectionMongoDB = connectionMongoDB
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})