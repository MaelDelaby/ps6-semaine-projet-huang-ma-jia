const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('AvailabilityTimeSlot', {
  id: Joi.number().required(),
  receiverId: Joi.number().required(),
  date: Joi.string().required(),
  beginningHour: Joi.string().required(),
  endingHour: Joi.string().required(),
});
