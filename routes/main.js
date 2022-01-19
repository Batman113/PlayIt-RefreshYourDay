const express = require('express');
const router = express.Router();

console.log('Router Loaded');
const mainPageController = require('../controllers/mainPageController');
router.get('/',mainPageController.homePage);

module.exports = router;