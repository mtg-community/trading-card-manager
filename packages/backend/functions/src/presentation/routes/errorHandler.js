function errorHandler(err, req, res, next) {
  res.locals.message = err.message;
  res.status(err.status || 500).json({ error: err });
}

module.exports = { errorHandler };
