const express = require('express');
const router = express.Router();

const controller = require('../controller/index');
router.post('/getname', controller.makename);

module.exports = router;