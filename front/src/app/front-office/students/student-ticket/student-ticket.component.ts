import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User} from 'src/models/user';

@Component({
  selector: 'app-student-ticket',
  templateUrl: './student-ticket.component.html',
  styleUrls: ['./student-ticket.component.scss']
})
export class StudentTicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  student: User;


  constructor() {
  }

  
  ngOnInit() {
  }
}
