import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company} from 'src/models/company';

@Component({
  selector: 'app-company-ticket',
  templateUrl: './company-ticket.component.html',
  styleUrls: ['./company-ticket.component.scss']
})
export class CompanyTicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  company: Company;
  @Input()
  countryExist: boolean;
  @Output()
  clickEvent = new EventEmitter<Number>();

  public ratingFullStarsArray: any[]
  public ratingEmptyStarsArray: any[]
  public existHalfStar: boolean
  

  constructor() {
  }

  ngOnInit() {
    this.ratingFullStarsArray = Array(Math.trunc(this.company.rating));
    this.ratingEmptyStarsArray = Array(Math.trunc(5 - this.company.rating));
    this.existHalfStar = (5 != (Math.trunc(5 - this.company.rating) + Math.trunc(this.company.rating)));
  }

  mouseClick(id: number) {
    this.clickEvent.emit(id);
  }
}
