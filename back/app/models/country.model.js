const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Country', {
  id: Joi.string().required(),
  name: Joi.string().required(),
  flagPath: Joi.string().required(),
  photoPath: Joi.string().required(),
  information: Joi.string().required(),
  someInformation: Joi.string().required(),
  visaStudentDifficulty: Joi.number().required(),
  visaStudentInformation: Joi.string().required(),
  visaWorkerDifficulty: Joi.number().required(),
  visaWorkerInformation: Joi.string().required(),
  continent: Joi.string().required(),
  costOfLiving: Joi.number().required(),
  nbCompany: Joi.number().required(),
  nbIntership: Joi.number().required(),
  averageRatingIntership: Joi.number().required(),
});
