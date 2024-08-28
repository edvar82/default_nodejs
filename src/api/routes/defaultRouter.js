const express = require('express');
const defaultController = require('../controllers/defaultController');

const router = express.Router();

router.get('/default', defaultController.Hello);

module.exports = router;