import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';

/*
  Services
*/
import { CompanyService } from '../../../services/company/company.service';
import { SectorService } from '../../../services/sector/sector.service';
import { SpecialtyService } from '../../../services/specialty/specialty.service';
import { ActivitySectorService } from '../../../services/activitySector/activitySector.service';
import { CompanySizeService } from 'src/services/companySize/companySize.service';
import { ContinentService } from 'src/services/continent/continent.service';

/*
  Models
*/
import { Company } from '../../../models/company';

@Component({
  selector: 'app-company-search-page',
  templateUrl: './company-search-page.component.html',
  styleUrls: ['./company-search-page.component.scss']
})
export class CompanySearchPageComponent implements OnInit {

  //Info
  public countryPageForm: FormGroup

  //List
  public companyList: Company[]
  public companyListVisible: Company[]

  //Form
  public sectorArray: any[]
  public specialtyArray: any[]
  public activitySectorArray: any[]
  public continentArray: any[]
  public sizeArray: any[]
  public sortArray: string[]
  public research: string
  public sortBy: string
  public resultNb: number

  constructor(public formBuilder: FormBuilder,
    public companyService: CompanyService,
    public sectorService: SectorService,
    public specialtyService: SpecialtyService,
    public activitySectorService: ActivitySectorService,
    public companySizeService: CompanySizeService,
    public continentService: ContinentService,
    private route: ActivatedRoute) {

    this.sectorArray = [];
    this.specialtyArray = [];
    this.activitySectorArray = [];
    this.continentArray = [];
    this.sizeArray = [];
    this.sortArray = ['Note moyenne', 'Nombre de stages déjà effectués croissant', 'Nombre de stages déjà effectués decroissant', 'Nom de l\'entreprise croissant', 'Nom de l\'entreprise decroissant'];
    this.research = "";
    this.sortBy = 'Note moyenne';
    this.resultNb = 0;

    //List
    this.companyListVisible = [];
    this.companyService.companies$.subscribe((companies) => {
        this.companyList = companies;
        this.filterWithResearch();
    });

    //Form
    this.sectorService.sectors$.subscribe((sectors) => {
      this.sectorArray = sectors;
    });
    this.specialtyService.specialties$.subscribe((specialties) => {
      this.specialtyArray = specialties;
    });
    this.continentService.continents$.subscribe((continents) => {
      this.continentArray = continents;
    });
    this.activitySectorService.activitySectors$.subscribe((activitySectors) => {
      this.activitySectorArray = activitySectors;
    });
    this.companySizeService.companySizes$.subscribe((companySizes) => {
      this.sizeArray = companySizes;
    });

    this.countryPageForm = this.formBuilder.group({
      sector: [''],
      specialty: [''],
      continent: [''],
      activitySector: [''],
      size1: [''],
      size2: [''],
      size3: ['']
    });


    this.countryPageForm.setValue({
      sector: '- Filière -',
      specialty: '- Spécialité -',
      continent: '- Continent -',
      activitySector: '- Secteur d\'activité -',
      size1: true,
      size2: true,
      size3: true
    });
  }

  ngOnInit() {
  }

  sectorChange(value){
    this.specialtyService.setSectorName(value);
    this.countryPageForm.patchValue({
      specialty: '- Spécialité -'
    });
  }

  formChange(){
    this.companyService.formChange(this.countryPageForm);
  }

  researchChange(value){
    this.research = value;
    this.filterWithResearch();
  }

  filterWithResearch(){
    this.companyListVisible = this.companyList.filter(company => {
      return company.name.toUpperCase().includes(this.research.toUpperCase())
       || company.activitySector.toUpperCase().includes(this.research.toUpperCase())
       || company.address.toUpperCase().includes(this.research.toUpperCase());
    })

    this.resultNb = this.companyListVisible.length;

    this.companyListSort();
  }

  companyListSortChange(value){
    this.sortBy = value;
    this.companyListSort();
  }

  companyListSort(){
    this.companyListVisible = this.companyListVisible.sort((a,b) => {
      switch (this.sortBy){
        case 'Note moyenne':
          return b.rating - a.rating;
        case 'Nombre de stages déjà effectués croissant' :
          return a.internshipNb - b.internshipNb;
        case 'Nombre de stages déjà effectués decroissant' :
          return b.internshipNb - a.internshipNb;
        case 'Nom de l\'entreprise croissant' :
          return a.name < b.name ? -1 : 1;
        case 'Nom de l\'entreprise decroissant' :
          return a.name > b.name ? -1 : 1;
      }
    });
  }

  companyClick(idCompany: string) {
    window.location.href = 'http://localhost:4200/company?id=' + idCompany;
  }
}
