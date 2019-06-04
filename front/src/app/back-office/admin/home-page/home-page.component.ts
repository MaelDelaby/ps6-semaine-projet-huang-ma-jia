import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/services/request/request.service';
import { User } from 'src/models/user';
import { Company } from 'src/models/company';
import { Internship } from 'src/models/internship';
import { Request } from 'src/models/request';

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

  public ratingFullStarsArray: any[]
  public ratingEmptyStarsArray: any[]

  constructor(public requestService: RequestService) {
    this.requestService.student$.subscribe((value) => {
      this.student = value;
    });
    this.requestService.company$.subscribe((value) => {
      this.company = value;
    });
    this.requestService.internship$.subscribe((value) => {
      this.internship = value;
      if (this.internship){
        this.ratingFullStarsArray = Array(Math.trunc(this.internship.rating));
        this.ratingEmptyStarsArray = Array(Math.trunc(5 - this.internship.rating));
      }
    });
    this.requestService.request$.subscribe((value) => {
      this.request = value;
    });

  }

  ngOnInit() {

  }

  public pushButtonAccept(){
    this.requestService.accept();
  }

  public pushButtonReject(){
    console.log("coucou");
    this.requestService.reject();
  }
}
