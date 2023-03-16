"use strict";

const joi = require('@hapi/joi');
const httpStatus = require('http-status');

const Pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');

const validate = (schema, addStatusKey = false) => (req, res, next) => {
	const validSchema = Pick(schema, ['params', 'query', 'body', 'headers']);
	const object = Pick(req, Object.keys(validSchema));
	const { value, error } = joi.compile(validSchema)
		.prefs({ errors: { label: 'key' } })
		.validate(object);

	if (error) {
		const errorMessage = error.details.map((details) => details.message.replace(/"/g, '')).join(', ');
		if (addStatusKey) {
			return res.status(httpStatus.BAD_REQUEST).send({ status: false, message: errorMessage });
		} else {
			return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
		}
	}
	Object.assign(req, value);
	return next();
};

module.exports = validate;
