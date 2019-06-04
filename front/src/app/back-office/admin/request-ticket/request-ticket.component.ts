import { Component, Input, OnInit } from '@angular/core';
import { Internship } from 'src/models/internship';

import { OneUserService } from 'src/services/user/one-user.service';
import { Request } from 'src/models/request';

@Component({
  selector: 'app-request-ticket',
  templateUrl: './request-ticket.component.html',
  styleUrls: ['./request-ticket.component.scss']
})
export class RequestTicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  request: Request;

  constructor(public oneUserService: OneUserService) {

  }
  

  ngOnInit() {
  }
}
