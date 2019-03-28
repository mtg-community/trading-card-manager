const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { router } = require('./routes');

const app = express();

app.use(cors({ origin: true }));
app.use(cookieParser());
app.use(router);

module.exports = app;
