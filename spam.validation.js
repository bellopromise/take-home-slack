const joi = require('@hapi/joi');


module.exports.slackPayload = {
    body: joi.object().keys({
        RecordType: joi.string().required().allow(null, ''),
        Type: joi.string().required().allow(null, ''),
        TypeCode: joi.number().required(),
        Name: joi.string().required().allow(null, ''),
        Tag: joi.string().required().allow(null, ''),
        MessageStream: joi.string().required().allow(null, ''),
        Description: joi.string().required().allow(null, ''),
        Email: joi.string().required().allow(null, ''),
        From: joi.string().required().allow(null, ''),
        BouncedAt: joi.date().required().allow(null, '')
    })
}

