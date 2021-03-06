const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/paymentRoutes.js')
const countRoutes = require('./routes/countRoutes.js')
const sumarryRoutes = require('./routes/summaryRoutes')
const PORT = 8000 || process.env.PORT
const connectionMongoDB = require('./config/connectionMongoDB');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', paymentRoutes);
app.use('/api', countRoutes)
app.use('/api', sumarryRoutes)


app.connectionMongoDB = connectionMongoDB

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})