import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup } from '@angular/forms';

/*
  Services
*/
import { OneCompanyService } from 'src/services/company/one-company.service';
import { InternshipService } from 'src/services/internship/internship.service';

/*
  Models
*/
import { Company } from 'src/models/company';
import { Internship } from 'src/models/internship';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {

  //Info
  public company: Company

  //List
  public internshipList: Internship[]

  //Form
  public companyPageForm: FormGroup
  public studentPageForm: FormGroup
  public sortArray: string[]
  public sortBy: string

  constructor(public formBuilder: FormBuilder,
    public oneCompanyService: OneCompanyService,
    public internshipService: InternshipService,
    private route: ActivatedRoute) {

    this.sortArray = ['Note', 'Nom du stage croissant', 'Nom du stage decroissant', 'Durée croissant', 'Durée decroissant'];
    this.sortBy = 'Note';
    this.internshipList = [];

    //Route
    this.route.queryParams.subscribe(params => {
      this.oneCompanyService.setCompanyId(params['id']);
      this.internshipService.setCompanyId(params['id']);
    });

    //Info
    this.oneCompanyService.company$.subscribe((company) => {
        this.company = company;
        this.internshipListSort();
    });

    //List
    this.internshipService.internships$.subscribe((internships) => {
        this.internshipList = internships;
        this.internshipListSort();
    });
  }

  ngOnInit() {
  }

  internshipListSortChange(value){
    this.sortBy = value;
    this.internshipListSort();
  }

  internshipListSort(){
    this.internshipList = this.internshipList.sort((a,b) => {
      switch (this.sortBy){
        case 'Note':
          return b.rating - a.rating;
        case 'Nom du stage croissant' :
          return a.name < b.name ? -1 : 1;
        case 'Nom du stage decroissant' :
          return a.name > b.name ? -1 : 1;
        case 'Durée croissant' :
          return (new Date(a.endDate).getTime() - new Date(a.startDate).getTime()) < (new Date(b.endDate).getTime() - new Date(b.startDate).getTime()) ? -1 : 1;
        case 'Durée decroissant' :
          return (new Date(a.endDate).getTime() - new Date(a.startDate).getTime()) > (new Date(b.endDate).getTime() - new Date(b.startDate).getTime()) ? -1 : 1;
      }
    });
  }
}
