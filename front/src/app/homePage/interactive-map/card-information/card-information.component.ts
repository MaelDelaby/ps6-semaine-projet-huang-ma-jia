import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Country} from '../../../../models/country';

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.scss']
})
export class CardInformationComponent implements OnChanges {

  @Input()
  ticket: Country;
  @Input()
  visaStudentFullStarsArray: any[];
  @Input()
  visaStudentEmptyStarsArray: any[];
  @Input()
  xPosition: Number;
  @Input()
  yPosition: Number;

  public ratingFullStarsArray: any[]
  public ratingEmptyStarsArray: any[]
  public existHalfStar: boolean

  public costOfLivingDollarArray: any[]
  public costOfLivingEmptyDollarArray: any[]

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    let root = document.documentElement;
    try {
      root.style.setProperty('--mouse-x', changes.xPosition.currentValue + 'px');
      root.style.setProperty('--mouse-y', changes.yPosition.currentValue + 'px');
    } catch (error) {}
    if (this.ticket != null){
      this.ratingFullStarsArray = Array(Math.trunc(this.ticket.averageRatingIntership));
      this.ratingEmptyStarsArray = Array(Math.trunc(5 - this.ticket.averageRatingIntership));
      this.existHalfStar = (5 != (Math.trunc(5 - this.ticket.averageRatingIntership) + Math.trunc(this.ticket.averageRatingIntership)));
      this.costOfLivingDollarArray = Array(Math.trunc(this.ticket.costOfLiving));
      this.costOfLivingEmptyDollarArray = Array(Math.trunc(3 - this.ticket.costOfLiving));
    }
  }
}
