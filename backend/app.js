const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes)

app.get('/', (req, res, next) => {
    res.json({ msg: "hello" })
})
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