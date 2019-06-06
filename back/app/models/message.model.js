const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Message', {
  id: Joi.number().required(),
  studentId: Joi.number().required(),
  adminId: Joi.number().required(),
});
