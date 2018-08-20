// @flow

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));
app.use(cookieParser());

const welcome = {
  title: 'Welcome to MTG Deals',
  message: 'If this is your first time? <br /> <b>Enjoy it!</b>',
};

app.get('/', (req, res) => res.send('Hello World'));
app.get('/welcome', (req, res) => res.send(welcome));
app.get('/:userId/welcome', (req, res) => res.send(welcome));

module.exports = app;
