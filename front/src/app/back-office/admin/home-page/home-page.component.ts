import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/services/request/request.service';
import { User } from 'src/models/user';
import { Company } from 'src/models/company';
import { Internship } from 'src/models/internship';
import { Request } from 'src/models/request';
import { OneCountryService } from 'src/services/country/one-country.service';
import { OneCompanyService } from 'src/services/company/one-company.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class AdminHomePageComponent implements OnInit {

  public student: User;
  public company: Company;
  public internship: Internship;
  public request: Request;

  public countryNameForCompany: String;
  public companyNameForInternship: String;

  public requestNb: number;

  public ratingFullStarsArray: any[]
  public ratingEmptyStarsArray: any[]

  constructor(public requestService: RequestService,
    public oneCountryService: OneCountryService,
    public oneCompanyService: OneCompanyService) {

    this.requestService.student$.subscribe(value => this.student = value);

    this.requestService.company$.subscribe(value => {
      this.company = value;
      if (this.company){
        this.oneCountryService.setCountryId(this.company.countryId);
      }
    });
    
    this.oneCountryService.country$.subscribe(value => this.countryNameForCompany = value ? value.name : null);

    this.requestService.internship$.subscribe(value => {
      this.internship = value;
      if (this.internship){
        this.ratingFullStarsArray = Array(Math.trunc(this.internship.rating));
        this.ratingEmptyStarsArray = Array(Math.trunc(5 - this.internship.rating));
        this.oneCompanyService.setCompanyId(this.internship.companyId);
      }
    });

    this.oneCompanyService.company$.subscribe(value => this.companyNameForInternship = value ? value.name : null);

    this.requestService.request$.subscribe(value => this.request = value);

    this.requestService.requestNb$.subscribe(value => this.requestNb = value);
    
    this.requestService.getNext();
  }

  ngOnInit() {

  }

  public pushButtonAccept(){
    this.requestService.accept();
  }

  public pushButtonReject(){
    this.requestService.reject();
  }

  public pushButtonLate(){
    this.requestService.late();
  }
}
