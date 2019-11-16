// day-46.js
// Prerequisites
// NodeJS - https://nodejs.org/en/
//
// cd 2019/40/day-46/ && npm install && node day-46.js

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride  = require('method-override');
const cors = require('cors');

const routers = require('./routes/index');

// App
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride());

// routers
app.get('/', (req, res) => {
  res.json({ message: 'CRUD API' })
});

app.use('/api/v1/movies', routers);

app.use((req, res, next) => {
  res.status(404);
  res.json({ message: 'Not Found' });
});

// Starting server
app.listen('3000');
console.log('http://localhost:3000/');
