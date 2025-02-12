const users = require('./src/routes/users');
const express = require('express');
const cors = require('cors');


const app = express();


app.use(cors());
app.use(express.json());


app.use('/users', users);

module.exports = app;