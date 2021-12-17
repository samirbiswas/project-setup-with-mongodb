const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const routes = require('./routes');
//const formidable = require('express-formidable');


app.use(cors()); // allow cors request
app.use(express.json());
app.use(morgan('dev'));
app.use(routes);
// app.use(formidable({ multiples: true }));


module.exports = app