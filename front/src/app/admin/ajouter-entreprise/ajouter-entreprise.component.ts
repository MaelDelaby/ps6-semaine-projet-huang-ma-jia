import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ActivitySectorService } from '../../../services/activitySector/activitySector.service';
import { ContinentService } from 'src/services/continent/continent.service';
import { CountryService } from 'src/services/country/country.service';
import { CompanyService } from 'src/services/company/company.service';
import { Company } from 'src/models/company';
import { debug } from 'util';

@Component({
  selector: 'app-ajouter-entreprise-page',
  templateUrl: './ajouter-entreprise.component.html',
  styleUrls: ['../styleForms.scss']
})
export class AjouterEntreprisePageComponent implements OnInit {

  public addCompanyPageForm: FormGroup

  public activitySectorArray: any[]
  public continentArray: any[]
  public countryArray: any[][]

  public formError: boolean

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
      employesNb: [''],
      activitySector: [''],
      countryId: [''],
      address: [''],
      description: ['']
    });

    this.addCompanyPageForm.setValue({
      name: '',
      iconImage: '',
      creationDate: '',
      employesNb: '',
      activitySector: '',
      countryId: '',
      address: '',
      description: ''

    });

    this.formError = false;
  }

  ngOnInit() {

  }

  addCompany(){
    if (this.addCompanyPageForm.getRawValue().name == "" ||
      this.addCompanyPageForm.getRawValue().country == ""){
        this.formError = true;
        return;
    }

    this.companyService.addCompany(this.addCompanyPageForm.getRawValue() as Company);
  }
  
}
