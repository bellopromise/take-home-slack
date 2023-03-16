const express = require('express')
const SpamController = require('./controllers/spam.controller')
const spamValidation  = require('./spam.validation');
const validate = require('./middlewares/validate');

const router = express.Router()

router.post('/notify', validate(spamValidation.slackPayload), SpamController.send);


module.exports = router
