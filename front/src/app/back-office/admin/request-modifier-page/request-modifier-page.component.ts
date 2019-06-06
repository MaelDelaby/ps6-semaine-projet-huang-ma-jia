import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/services/request/request.service';
import { User } from 'src/models/user';
import { Company } from 'src/models/company';
import { Internship } from 'src/models/internship';
import { Request } from 'src/models/request';
import { OneCountryService } from 'src/services/country/one-country.service';
import { OneCompanyService } from 'src/services/company/one-company.service';

@Component({
  selector: 'app-request-modifier-page',
  templateUrl: './request-modifier-page.component.html',
  styleUrls: ['./request-modifier-page.component.scss']
})
export class RequestModifierPageComponent implements OnInit {

  public student: User;
  public company: Company;
  public internship: Internship;
  public request: Request;

  public countryNameForCompany: String;
  public companyNameForInternship: String;

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
    
    this.requestService.getNext();
  }

  ngOnInit() {

  }

  public pushButtonAccept(){
    this.requestService.accept(this.request.id);
  }

  public pushButtonReject(){
    this.requestService.reject(this.request.id);
  }

  public pushButtonLate(){
    this.requestService.late(this.request.id);
  }
}
