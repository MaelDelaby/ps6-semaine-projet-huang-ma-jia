import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Country} from 'src/models/country';

@Component({
  selector: 'app-country-ticket',
  templateUrl: './country-ticket.component.html',
  styleUrls: ['./country-ticket.component.scss']
})
export class CountryTicketComponent implements OnInit {

  @Output() clickEventTicket = new EventEmitter<String>();

  @Input()
  ticket: Country;

  public visaStudentFullStarsArray: any[] = null;
  public visaStudentEmptyStarsArray: any[] = null;
  public isSelected: Boolean = false;

  public costOfLivingDollarArray: any[] = null;
  public costOfLivingEmptyDollarArray: any[] = null;

  public ratingFullStarsArray: any[]
  public ratingEmptyStarsArray: any[]
  public existHalfStar: boolean

  constructor() {

  }

  ngOnInit() {
    this.visaStudentFullStarsArray = Array(this.ticket.visaStudentDifficulty);
    this.visaStudentEmptyStarsArray = Array(5 - this.ticket.visaStudentDifficulty);

    this.costOfLivingDollarArray = Array(this.ticket.costOfLiving);
    this.costOfLivingEmptyDollarArray = Array(3 - this.ticket.costOfLiving);
  }

  onClick(countryId: String) {
    this.clickEventTicket.emit(countryId);
  }

  mouseEnter() {
    this.ratingFullStarsArray = Array(Math.trunc(this.ticket.averageRatingIntership));
    this.ratingEmptyStarsArray = Array(Math.trunc(5 - this.ticket.averageRatingIntership));
    this.existHalfStar = (5 != (Math.trunc(5 - this.ticket.averageRatingIntership) + Math.trunc(this.ticket.averageRatingIntership)));
    this.isSelected = true;
  }

  mouseLeave() {
    this.isSelected = false;
  }
}
