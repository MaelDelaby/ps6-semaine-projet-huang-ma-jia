import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Country} from 'src/models/country';

@Component({
  selector: 'app-map-world',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.scss']
})
export class InteractiveMapComponent implements OnInit {

  @Output() clickEvent = new EventEmitter<String>();

  @Input() countryTicketList:  Country[];

  public visaStudentFullStarsArray: any[] = null;
  public visaStudentEmptyStarsArray: any[] = null;
  public xPosition: number = null;
  public yPosition: number = null;
  public countrySelected: Country = null;

  constructor() {

  }

  ngOnInit() {

  }

  mouseMove(id: string) {
    if (this.countrySelected !== null && this.countrySelected.id === id) {
      this.xPosition = event.clientX;
      this.yPosition = event.clientY;
    } else {
      this.mouseEnter(id);
    }
  }

  mouseEnter(id: string) {
    if (this.countrySelected === null || this.countrySelected.id !== id) {
      for (let i = 0; i < this.countryTicketList.length; i++) {
        if (this.countryTicketList[i].id === id) {
          this.countrySelected = this.countryTicketList[i];
          this.visaStudentFullStarsArray = Array(this.countryTicketList[i].visaStudentDifficulty);
          this.visaStudentEmptyStarsArray = Array(5 - this.countryTicketList[i].visaStudentDifficulty);
          this.xPosition = event.clientX;
          this.yPosition = event.clientY;

        }
      }
    }
  }

  mouseLeave(id: string) {
    if (this.countrySelected !== null) {
      this.countrySelected = null;
    }
  }

  mouseClick(id: string) {
    for (let i = 0; i < this.countryTicketList.length; i++) {
      if (this.countryTicketList[i].id === id) {
        this.clickEvent.emit(id);
      }
    }
  }
}
