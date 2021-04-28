const express = require('express');
const app = express();
const PORT = 8000 = process.env.PORT

app.use(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})