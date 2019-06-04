const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Request', {
  id: Joi.number().required(),
  studentId: Joi.number().required(),
  companyId: Joi.number().required(),
  internshipId: Joi.number().required(),
  date: Joi.string().required(),
});