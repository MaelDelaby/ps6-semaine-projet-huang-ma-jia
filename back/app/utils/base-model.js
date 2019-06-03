/* eslint-disable no-param-reassign */
const fs = require('fs');
const Joi = require('joi');
const logger = require('../utils/logger.js');
const ValidationError = require('./errors/validation-error.js');
const NotFoundError = require('./errors/not-found-error.js');


module.exports = class BaseModel {
  constructor(name, schema) {
    if (!name) throw new Error('You must provide a name in constructor of BaseModel');
    if (!schema) throw new Error('You must provide a schema in constructor of BaseModel');
    this.schema = Joi.object()
      .keys(Object.assign({}, schema, {
        id: Joi.number()
          .required(),
      }));
    this.items = [];
    this.name = name;
    this.filePath = `${__dirname}/../../mocks/${this.name.toLowerCase()}.mocks.json`;
    this.load();
  }

  load() {
    try {
      this.items = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
    } catch (err) {
      if (err.message === 'Unexpected end of JSON input') logger.log(`Warning : ${this.filePath} has wrong JSON format`);
    }
  }

  save() {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(this.items, null, 2), 'utf8');
    } catch (err) {
      logger.log(`Error while trying to save ${this.name}`);
    }
  }

  get() {
    return this.items;
  }

  /* Country */
  getWithCountryFilter(query){
    let countries = this.items;

    if (query.continent != null){
      countries.filter(country => country.continent === query.continent)
    }

    return countries;
  }

  /* Company */
  getWithCompanyFilter(query) {
    let companies = this.items;

    if (query.countryId != null) {
      companies = companies.filter(company => company.countryId == query.countryId);
    }

    if (query.sector && query.sector !== 'all') {
      const { Internship } = require('../models');

      companies = companies.filter(
        company => Internship.getWithIntershipFilter({
              'companyId': company.id,
              'sector': query.sector,
              'specialty': query.specialty
          }).length != 0
      );
    }

    if (query.continent && query.continent !== 'all') {
      const { Country } = require('../models');
      companies = companies.filter(
        company => Country.items
          .find(country => company.countryId == country.id)
          .continent == query.continent,
      );
    }

    if (query.size1 && query.size2 && query.size3) {
      if (query.size1 == 'false'){
        companies = companies.filter(company => !(company.employeesNumber <= 49));
      }
      if (query.size2 == 'false'){
        companies = companies.filter(company => !(company.employeesNumber >= 50 && company.employeesNumber <= 499));
      }
      if (query.size3 == 'false'){
        companies = companies.filter(company => !(company.employeesNumber >= 500));
      }
    }

    if (query.activitySector) {
      companies = companies.filter(company => company.activitySector == query.activitySector);
    }

    //Add rating
    const { Internship } = require('../models');

    companies.forEach(company => {
      company.rating = Internship.getRating(company.id);
    });

    //Add internshipNb
    companies.forEach(company => company.internshipNb = Internship.getInternshipsNb({companyId: company.id}));

    return companies;
  }

  /* Internship */
  getWithInternshipFilter(query) {
    let internships = this.items;

    if (query.companyId != null) {
      internships = internships.filter(internship => internship.companyId == query.companyId);
    }

    if (query.hasCompanyCar != null) {
      internships = internships.filter(internship => internship.hasCompanyCar == true);
    }

    if (query.contractRenewed != null) {
      internships = internships.filter(internship => internship.contractRenewed != '');
    }

    return internships;
  }


  /*getActivitySectors(){
    let activitySectors = [];
    this.items.every(company => activitySectors.push(company.activitySector));

    return [...new Set(activitySectors)];
  }*/

  /* Company */
  getNumberCompanyByCountryId(query){
    let companies = this.items;

    if (query.countryId != null) {
      companies = companies.filter(company => company.countryId == query.countryId);
    }
    return companies.length;
  }

  /* Internship */
  getInternshipsNb(query){
    if (query.countryId != null) {
      const { Company } = require('../models' );
      
      let sum = 0;

      Company.items.filter(company => company.countryId == query.countryId)
        .forEach(company => {
          sum += this.getInternshipsNb({companyId: company.id});
      })

      return sum;
    }

    if (query.companyId != null) {
      return this.items.filter(intership => intership.companyId == query.companyId).length;
    }
  }

  getAverageRatingIntershipByCountryId(query){

    if (query.countryId != null) {
      const { Company } = require('../models' );

      let average = 0;
      let nbIntership = this.getInternshipsNb(query)

      if (nbIntership === null){
        return 0;
      }
      else {
        Company.items.filter(company => company.countryId == query.countryId).forEach(company => {
          average += parseInt(this.getAverageRatingIntershipByCountryId({companyId: company.id}), 10);
      })
        return average/nbIntership;
      }
    }
    if (query.companyId != null) {
      let buf = 0;

      this.items.filter(intership => intership.companyId == query.companyId).forEach(intership => {
        buf += intership.rating;
    })
      return buf;
    }
  }

  getWithIntershipFilter(query) {
    const { User } = require('../models');

    return this.items.filter(
      internship =>
        (query.companyId == null || internship.companyId == query.companyId)
        && (query.sector == null || User.items.find(student => student.id == internship.studentId).sector == query.sector)
        && (query.specialty == null || User.items.find(student => student.id == internship.studentId).specialty == query.specialty)
    );
  }

  getRating(companyId){
    let sum = 0;

    let internships = this.items.filter(internship => internship.companyId == companyId);

    internships.forEach(internship => sum += internship.rating);

    return sum / internships.length;
  }

  /* User */

  getWithUserFilter(query) {
    let users = this.items;

    if (query.countryId != null){
      const { Internship, Company } = require('../models');

      users = users.filter(user => 
        Internship.items.find(internship => 
          internship.studentId == user.id && 
          Company.items.find(company => 
            company.countryId == query.countryId && 
            company.id == internship.companyId
          ) != null
        ) != null);
    }

    if (query.sector != null){
      users = users.filter(user => query.sector == user.sector);
      if (query.specialty != null){
        users = users.filter(user => query.specialty == user.specialty);
      }
    }

    return users
  }

  /* partnerHousing */

  getByCountryId(id) {
    const items = this.items.filter(parnterHousing => parnterHousing.countryId === id);
    return items;
  }

  /* internships */
  getByCompanyId(id) {
    const items = this.items.filter(internship => internship.companyId === id);
    return items;
  }

  /* Ticket */

  getById(id) {
    const item = this.items.find(i => i.id == id);
    if (!item) throw new NotFoundError(`Cannot get ${this.name} id=${id} : not found`);
    return item;
  }

  getBySomeInformation(filiere, specialite) {
    const item = this.items.filter(i => (i.sector === filiere) && (i.specialty === specialite));
    if (!item) throw new NotFoundError('Cannot get : not found');
    return item;
  }

  getByContractRenewedAndHasCompanyCar(contractRenewed, hasCompanyCar) {
    const item = this.items.filter(i => (i.contractRenewed === contractRenewed) && (i.hasCompanyCar === hasCompanyCar));
    if (!item) throw new NotFoundError('Cannot get : not found');
    return item;
  }

  filterCountry(continent) {
    if (continent === 'all') {
      console.log('continent = all');
      return this.items;
    }
    const countries = this.items.filter(i => (i.continent === continent));
    return countries;
  }

  create(obj = {}) {
    const item = Object.assign({}, obj, { id: Date.now() });
    const { error } = Joi.validate(item, this.schema);
    if (error) throw new ValidationError(`Create Error : Object ${JSON.stringify(obj)} does not match schema of model ${this.name}`, error);
    this.items.push(item);
    this.save();
    return item;
  }

  createCountry(obj = {}) {
    const item = obj;
    const { error } = Joi.validate(item, this.schema);
    if (error) throw new ValidationError(`Create Error : Object ${JSON.stringify(obj)} does not match schema of model ${this.name}`, error);
    this.items.push(item);
    this.save();
    return item;
  }

  update(id, obj) {
    if (typeof id === 'string') id = parseInt(id, 10);
    const prevObjIndex = this.items.findIndex(item => item.id === id);
    if (prevObjIndex === -1) throw new NotFoundError(`Cannot update ${this.name} id=${id} : not found`);
    console.log(this.items[prevObjIndex]);
    const updatedItem = Object.assign({}, this.items[prevObjIndex], obj);
    const { error } = Joi.validate(updatedItem, this.schema);
    if (error) throw new ValidationError(`Update Error : Object ${JSON.stringify(obj)} does not match schema of model ${this.name}`, error);
    this.items[prevObjIndex] = updatedItem;
    this.save();
    return updatedItem;
  }

  delete(id) {
    if (typeof id === 'string') id = parseInt(id, 10);
    const objIndex = this.items.findIndex(item => item.id === id);
    if (objIndex === -1) throw new NotFoundError(`Cannot delete ${this.name} id=${id} : not found`);
    this.items = this.items.filter(item => item.id !== id);
    this.save();
  }
};
