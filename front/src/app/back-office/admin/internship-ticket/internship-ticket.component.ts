import { Component, Input, OnInit } from '@angular/core';
import { Internship } from 'src/models/internship';

import { OneUserService } from 'src/services/user/one-user.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-internship-ticket',
  templateUrl: './internship-ticket.component.html',
  styleUrls: ['./internship-ticket.component.scss']
})
export class InternshipTicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  internship: Internship;

  public ratingFullStarsArray: any[]
  public ratingEmptyStarsArray: any[]
  public existHalfStar: boolean
  public student: User;

  constructor(public oneUserService: OneUserService) {
    this.oneUserService.user$.subscribe((user) => {
      if (user && user.id == this.internship.studentId)
        this.student = user;
    });
  }

  ngOnInit() {
    this.oneUserService.setUserId(this.internship.studentId);
    this.ratingFullStarsArray = Array(Math.trunc(this.internship.rating));
    this.ratingEmptyStarsArray = Array(Math.trunc(5 - this.internship.rating));
    this.existHalfStar = (5 != (Math.trunc(5 - this.internship.rating) + Math.trunc(this.internship.rating)));
  }
}
