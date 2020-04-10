const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use('/api/users', userRoutes)

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route', 404);
    throw error;
});

mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-aa2mf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => {
        console.log('mongoDB connected')
    })
    .then(() => {
        app.listen(5000, () => {
            console.log('listening on port 5000')
        });
    }).catch(err => {
        console.log(err);
    })