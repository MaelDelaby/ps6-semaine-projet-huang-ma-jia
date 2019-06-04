const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Internship', {
  id: Joi.number().required(),
  name: Joi.string().required(),
  studentId: Joi.number().required(),
  companyId: Joi.number().required(),
  startDate: Joi.string().required(),
  endDate: Joi.string().required(),
  period: Joi.string().required(),
  contractRenewed: Joi.string().required(),
  salary: Joi.string().allow(''),
  hasCompanyCar: Joi.boolean().required(),
  rating: Joi.number().required(),
  tuteur: Joi.string().allow(''),
  comment: Joi.string().required(),
  requestDate: Joi.string().required(),
});
