const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Company', {
  id: Joi.number().required(),
  name: Joi.string().required(),
  iconImage: Joi.string().required(),
  countryId: Joi.string().required(),
  address: Joi.string().required(),
  rating: Joi.number().required(),
  employeesNumber: Joi.number().required(),
  creationDate: Joi.string().required(),
  activitySector: Joi.string().required(),
  hiringOpportunities: Joi.string().required(),
  description: Joi.string().required(),
});
