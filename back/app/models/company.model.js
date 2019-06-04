const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Company', {
  id: Joi.number().required(),
  name: Joi.string().required(),
  iconImage: Joi.string().allow(''),
  countryId: Joi.string().required(),
  address: Joi.string().allow(''),
  rating: Joi.number().allow(''),
  employeesNumber: Joi.number().allow(''),
  creationDate: Joi.string().allow(''),
  activitySector: Joi.string().allow(''),
  hiringOpportunities: Joi.string().allow(''),
  description: Joi.string().allow(''),
  requestDate: Joi.string().required(),
  requestStudentId: Joi.number().required()
});
