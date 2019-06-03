import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

/*
  Services
*/
import { OneCountryService } from 'src/services/country/one-country.service';
import { PartnerHousingService } from 'src/services/partnerHousing/partnerHousing.service';
import { CompanyService } from 'src/services/company/company.service';
import { StudentService } from 'src/services/student/student.service';
import { SectorService } from 'src/services/sector/sector.service';
import { SpecialtyService } from 'src/services/specialty/specialty.service';
import { ActivitySectorService } from 'src/services/activitySector/activitySector.service';
import { CompanySizeService } from 'src/services/companySize/companySize.service';

/*
  Models
*/
import { Country } from 'src/models/country';
import { PartnerHousing } from 'src/models/partnerHousing';
import { Company } from 'src/models/company';
import { Student } from 'src/models/student';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

  //Info
  public country: Country
  public partnerHousingList: PartnerHousing[]
  public visaStudentFullStarsArray: any[]
  public visaStudentEmptyStarsArray: any[]
  public visaWorkerFullStarsArray: any[]
  public visaWorkerEmptyStarsArray: any[]

  public costOfLivingDollarArray: any[]
  public costOfLivingDollarEmptyArray: any[]

  //List
  public companyList: Company[]
  public companyListVisible: Company[]

  public studentList: Student[]
  public studentListVisible: Student[]

  //Form
  public countryPageForm: FormGroup
  public sectorArray: any[]
  public specialtyArray: any[]
  public studentSpecialtyArray: any[]
  public activitySectorArray: any[]
  public sizeArray: any[]
  public sortArray: string[]
  public research: string
  public sortBy: string
  public companyResultNb: number

  public studentPageForm: FormGroup

  constructor(public formBuilder: FormBuilder,
    public oneCountryService: OneCountryService,
    public partnerHousingService: PartnerHousingService,
    public companyService: CompanyService,
    public sectorService: SectorService,
    public specialtyService: SpecialtyService,
    public activitySectorService: ActivitySectorService,
    public companySizeService: CompanySizeService,
    public studentService: StudentService,
    private route: ActivatedRoute) {

    this.sectorArray = [];
    this.specialtyArray = [];
    this.studentSpecialtyArray = [];
    this.activitySectorArray = [];
    this.sizeArray = [];
    this.sortArray = ['Note moyenne', 'Nombre de stages déjà effectués croissant', 'Nombre de stages déjà effectués decroissant', 'Nom de l\'entreprise croissant', 'Nom de l\'entreprise decroissant'];
    this.research = "";
    this.sortBy = 'Note moyenne';
    this.companyResultNb = 0;

    this.countryPageForm = this.formBuilder.group({
      sector: [''],
      specialty: [''],
      activitySector: [''],
      size1: [''],
      size2: [''],
      size3: ['']
    });

    this.studentPageForm = this.formBuilder.group({
      sector: [''],
      specialty: ['']
    });


    this.countryPageForm.setValue({
      sector: '- Filière -',
      specialty: '- Spécialité -',
      activitySector: '- Secteur d\'activité -',
      size1: true,
      size2: true,
      size3: true
    });

    this.studentPageForm.setValue({
      sector: '- Filière -',
      specialty: '- Spécialité -'
    });

    //Route
    this.route.queryParams.subscribe(params => {
      this.oneCountryService.setCountryId(params['id']);
      this.partnerHousingService.setCountryId(params['id']);
      this.companyService.setCountryId(params['id']);
      this.studentService.setCountryId(params['id']);
    });

    //Info
    this.oneCountryService.country$.subscribe((country) => {
        this.country = country;
        if (country != null) {
            this.visaStudentFullStarsArray = Array(country.visaStudentDifficulty);
            this.visaStudentEmptyStarsArray = Array(5 - country.visaStudentDifficulty);
            this.visaWorkerFullStarsArray = Array(country.visaWorkerDifficulty);
            this.visaWorkerEmptyStarsArray = Array(5 - country.visaWorkerDifficulty);
            this.costOfLivingDollarArray = Array(country.costOfLiving);
            this.costOfLivingDollarEmptyArray = Array(3 - country.costOfLiving);
        }
    });
    this.partnerHousingService.partnersHousings$.subscribe((partnerHousings) => {
        this.partnerHousingList = partnerHousings;
    });

    //List
    this.companyListVisible = [];
    this.companyService.companies$.subscribe((companies) => {
        this.companyList = companies;
        this.filterWithResearch();
    });
    this.studentListVisible = [];
    this.studentService.students$.subscribe((students) => {
        this.studentList = students;
        this.studentFilterWithResearch();
    });

    //Form
    this.sectorService.sectors$.subscribe((sectors) => {
      this.sectorArray = sectors;
    });
    this.specialtyService.specialties$.subscribe((specialties) => {
      this.specialtyArray = specialties;
    });
    this.specialtyService.specialties$.subscribe((specialties) => {
      this.studentSpecialtyArray = specialties;
    });
    this.activitySectorService.activitySectors$.subscribe((activitySectors) => {
      this.activitySectorArray = activitySectors;
    });
    this.companySizeService.companySizes$.subscribe((companySizes) => {
      this.sizeArray = companySizes;
      /*for (let companySize of companySizes){
        this.countryPageForm.addControl(companySize.id, null);
      }*/
    });
  }

  ngOnInit() {
  }

  sectorChange(value){
    this.specialtyService.setSectorName(value);
    this.countryPageForm.patchValue({
      specialty: '- Spécialité -'
    });
    this.studentPageForm.patchValue({
      specialty: '- Spécialité -'
    });
  }

  formChange(){
    this.companyService.formChange(this.countryPageForm);
  }

  studentFormChange(){
    this.studentService.formChange(this.studentPageForm);
  }

  researchChange(value){
    this.research = value;
    this.filterWithResearch();
  }

  studentResearchChange(value){
    this.research = value;
    this.studentFilterWithResearch();
  }

  filterWithResearch(){
    this.companyListVisible = this.companyList.filter(company => {
      return company.name.toUpperCase().includes(this.research.toUpperCase())
       || company.activitySector.toUpperCase().includes(this.research.toUpperCase())
       || company.address.toUpperCase().includes(this.research.toUpperCase());
    })

    this.companyResultNb = this.companyListVisible.length;

    this.companyListSort();
  }

  studentFilterWithResearch(){
    this.studentListVisible = this.studentList.filter(student => {
      return student.firstName.toUpperCase().includes(this.research.toUpperCase())
       || student.lastName.toUpperCase().includes(this.research.toUpperCase())
       || student.phoneNb.toUpperCase().includes(this.research.toUpperCase());
    })
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
