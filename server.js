const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes')(app)
const PORT = 8000 || process.env.PORT
const connectionMongoDB = require('./config/connectionMongoDB');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.connectionMongoDB = connectionMongoDB
app.router = router;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})