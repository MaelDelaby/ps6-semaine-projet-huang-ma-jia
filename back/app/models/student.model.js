const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Student', {
  id: Joi.number().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  phoneNb: Joi.string().required(),
  profilePicture: Joi.string().required(),
  sector: Joi.string().required(),
  specialty: Joi.string().required(),
});
