const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;

const {userRouter} = require('./routes')

app.use(cors())
app.use('/api/users', userRouter);

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({message: error.message})
})

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connection to database is successful')).catch(() => console.log('Error while connecting to database', error));

app.listen(port, () => {
    console.log(`Server listens on port ${port}`)
})
