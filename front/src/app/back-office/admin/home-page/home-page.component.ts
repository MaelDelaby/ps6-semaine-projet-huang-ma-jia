import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/services/request/request.service';
import { Internship } from 'src/models/internship';
import { Company } from 'src/models/company';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class AdminHomePageComponent implements OnInit {

  public internshipArray: Internship[]
  public companyArray: Company[]

  constructor(public requestService: RequestService) {
    this.requestService.internships$.subscribe((internships) => {
      this.internshipArray = internships;
      console.log(this.internshipArray);
    });
    this.requestService.companies$.subscribe((companies) => {
      this.companyArray = companies;
    });
  }

  ngOnInit() {

  }
}
