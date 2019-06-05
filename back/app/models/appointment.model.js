const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Appointment', {
  id: Joi.number().required(),
  askerId: Joi.number().required(),
  receiverId: Joi.number().required(),
  beginningDate: Joi.date().required(), //yyyy-mm-dd hh:ii
  room: Joi.string().required(),
  duration: Joi.number().required(), //millis
  reason : Joi.string().required()
});
