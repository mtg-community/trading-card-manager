const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));
app.use(cookieParser());

app.get('/', (req, res) => res.send('Hello World'));

module.exports = app;
