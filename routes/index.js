const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const controller = require('../controller/index');
router.post('/getname', [
    body('name').notEmpty().withMessage("name should not be empty"),
    body('surname').notEmpty().withMessage("surname should not be empty"),
    body('age').notEmpty().withMessage("age should not be empty")
], controller.makename);

module.exports = router;