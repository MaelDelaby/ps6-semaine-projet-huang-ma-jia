const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Appointment', {
  id: Joi.number().required(),
  askerId: Joi.number().required(),
  receiverId: Joi.number().required(),
  beginningDate: Joi.date().required(), //yyyy-mm-dd hh:ii
  duration: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/).required(), //hh:ii
  reason : Joi.string().required()
});
