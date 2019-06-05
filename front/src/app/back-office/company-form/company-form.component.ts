import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getUser } from 'src/app/cookies'

import { ActivitySectorService } from 'src/services/activitySector/activitySector.service';
import { ContinentService } from 'src/services/continent/continent.service';
import { CountryService } from 'src/services/country/country.service';
import { CompanyService } from 'src/services/company/company.service';
import { Company } from 'src/models/company';
import { User } from 'src/models/user';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['../styleForms.scss']
})
export class CompanyFormComponent implements OnInit {

  @Input()
  company: Company;
  @Input()
  add: Boolean;

  public companyForm: FormGroup;

  public activitySectorArray: any[];
  public continentArray: any[];
  public countryArray: any[][];
  public iconImage: string;

  public formError: boolean;
  public formSaved: boolean;
  
  public user: User;

  constructor(public formBuilder: FormBuilder,
    public continentService: ContinentService,
    public countryService: CountryService,
    public companyService: CompanyService,
    public activitySectorService: ActivitySectorService) {

    this.user = getUser();

    this.activitySectorService.activitySectors$.subscribe((activitySectors) => {
      this.activitySectorArray = activitySectors;
    });
    this.continentService.continents$.subscribe((continents) => {
      this.continentArray = continents;
    });    
    this.countryService.countries$.subscribe((countries) => {
      this.countryArray = [];
      countries.forEach(country => {
        if (this.countryArray[country.continent] == null){
          this.countryArray[country.continent] = [];
        }
        this.countryArray[country.continent].push(country);
      });
    });

    this.companyForm = this.formBuilder.group({
      name: [''],
      iconImage: [''],
      creationDate: [''],
      employeesNumber: [''],
      activitySector: [''],
      countryId: [''],
      address: [''],
      description: [''],
      hiringOpportunities: ['']
    });

    this.formError = false;
    this.formSaved = false;
  }

  ngOnInit() {
    this.fillForm();
  }

  addCompany(){
    if (this.companyForm.getRawValue().name == "" ||
      this.companyForm.getRawValue().countryId == ""){
        this.formError = true;
        this.formSaved = false;
        return;
    }

    this.companyService.addCompany(this.companyForm.getRawValue() as Company, !this.user.isAdmin);

    this.formError = false;
    this.formSaved = true;
  }

  modifyCompany(){
    if (this.companyForm.getRawValue().name == "" ||
      this.companyForm.getRawValue().countryId == ""){
        this.formError = true;
        this.formSaved = false;
        return;
    }

    this.companyService.deleteCompany(this.company.id);
    this.companyService.addCompany(Object.assign({}, this.companyForm.getRawValue() as Company, {id : this.company.id}), !this.user.isAdmin);

    this.formError = false;
    this.formSaved = true;
  }

  iconImageChange(){
    this.iconImage = this.companyForm.getRawValue().iconImage;
  }

  fillForm(){
    if (this.company){
      this.companyForm.setValue({
        name: this.company.name,
        iconImage: this.company.iconImage,
        creationDate: this.company.creationDate,
        employeesNumber: this.company.employeesNumber,
        activitySector: this.company.activitySector,
        countryId: this.company.countryId,
        address: this.company.address,
        description: this.company.description,
        hiringOpportunities: this.company.hiringOpportunities
      });
    } else {
      this.companyForm.setValue({
        name: '',
        iconImage: '',
        creationDate: '',
        employeesNumber: '',
        activitySector: '',
        countryId: '',
        address: '',
        description: '',
        hiringOpportunities: ''
      });
    }
  }
}