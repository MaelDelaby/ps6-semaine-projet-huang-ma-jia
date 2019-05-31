import { Component, Input, OnInit } from '@angular/core';
import { Internship } from '../../../models/internship';

import { OneStudentService } from '../../../services/student/one-student.service';
import { Student } from 'src/models/student';

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
  public student: Student;

  constructor(public oneStudentService: OneStudentService) {
    this.oneStudentService.student$.subscribe((student) => {
      if (student && student.id == this.internship.studentId)
        this.student = student;
    });
  }

  ngOnInit() {
    this.oneStudentService.setStudentId(this.internship.studentId);
    this.ratingFullStarsArray = Array(Math.trunc(this.internship.rating));
    this.ratingEmptyStarsArray = Array(Math.trunc(5 - this.internship.rating));
    this.existHalfStar = (5 != (Math.trunc(5 - this.internship.rating) + Math.trunc(this.internship.rating)));
  }
}
