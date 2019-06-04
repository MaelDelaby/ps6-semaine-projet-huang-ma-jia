const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('AvailabilityTimeSlot', {
  id: Joi.number().required(),
  receiverId: Joi.number().required(),
  beginningDate: Joi.date().required(), //yyyy-mm-dd
  beginningHour: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/).required(), //hh:ii
  endingHour: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/).required(), //hh:ii
});
