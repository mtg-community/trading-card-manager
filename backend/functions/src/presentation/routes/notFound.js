function notFound(req, res, next) {
  let error = new Error('Route not found');
  error.status = 404;
  res.status(error.status).json(error);
  next(error);
}

module.exports = { notFound };
