const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Appointment', {
  id: Joi.number().required(),
  askerId: Joi.number().required(),
  receiverId: Joi.number().required()
});
