import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ActivitySectorService } from '../../../services/activitySector/activitySector.service';
import { ContinentService } from 'src/services/continent/continent.service';
import { CountryService } from 'src/services/country/country.service';
import { CompanyService } from 'src/services/company/company.service';
import { Company } from 'src/models/company';

@Component({
  selector: 'app-ajouter-entreprise-page',
  templateUrl: './ajouter-entreprise.component.html',
  styleUrls: ['../styleForms.scss']
})
export class AjouterEntreprisePageComponent implements OnInit {

  public addCompanyPageForm: FormGroup;

  public activitySectorArray: any[];
  public continentArray: any[];
  public countryArray: any[][];

  public formError: boolean;
  public formSaved: boolean;

  constructor(public formBuilder: FormBuilder,
    public continentService: ContinentService,
    public countryService: CountryService,
    public companyService: CompanyService,
    public activitySectorService: ActivitySectorService) {

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

    this.addCompanyPageForm = this.formBuilder.group({
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
    this.emptyCompanyPageForm();
    this.formError = false;
    this.formSaved = false;
  }

  ngOnInit() {

  }

  addCompany(){
    if (this.addCompanyPageForm.getRawValue().name == "" ||
      this.addCompanyPageForm.getRawValue().country == ""){
        this.formError = true;
        this.formSaved = false;
        return;
    }
    this.formError = false;
    this.formSaved = true;
    this.companyService.addCompany(this.addCompanyPageForm.getRawValue() as Company);
    this.emptyCompanyPageForm();
  }

  emptyCompanyPageForm(){
    this.addCompanyPageForm.setValue({
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
