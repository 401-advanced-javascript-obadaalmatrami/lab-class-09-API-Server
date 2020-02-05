'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const errorHandler = require('../src/middleware/500.js');
const notFound = require('../src/middleware/404.js');
const v1Router = require('./api-server/v1.js');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(v1Router);

app.use(notFound);
app.use(errorHandler);



let start = (port = process.env.PORT) => {
    app.listen(port, () => {
        console.log(`Server Up on ${port}`);
    });
};

module.exports = { app, start };