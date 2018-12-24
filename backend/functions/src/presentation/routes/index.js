const { Router } = require('express');
const router = Router();

const { notFound } = require('./notFound');
const { cardsRouter } = require('./cards');
const { errorHandler } = require('./errorHandler');

const welcome = {
  title: 'Welcome to MTG Deals',
  message: 'If this is your first time? <br /> <b>Enjoy it!</b>',
};

router.get('/', (req, res) => res.send(process.env.TEST_SECRET || 'Failed'));
router.get('/welcome', (req, res) => res.send(welcome));
router.get('/:userId/welcome', (req, res) => res.send(welcome));

router.use(cardsRouter);

// These two MUST be the last ones
router.use(notFound);
router.use(errorHandler);

module.exports = { router };
