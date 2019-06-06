import {Component, Input, OnInit} from '@angular/core';
import {AvailabilityTimeSlot} from "../../../../../models/availabilityTimeSlot";

@Component({
  selector: 'app-list-AvailabilityTimeSlot',
  templateUrl: './list-availabilityTimeSlot.component.html',
  styleUrls: ['./list-availabilityTimeSlot.component.scss', '../../../styleForms.scss']
})
export class ListAvailabilityTimeSlotComponent implements OnInit {

  @Input() availabilityTimeSlotList: AvailabilityTimeSlot[];
  @Input() availabilityTimeSlotListVisible: AvailabilityTimeSlot[];

  public researchDate: string = '';

  constructor() {
  };

  ngOnInit() {

  }

  researchChange(value) {
    this.researchDate = value;
    this.filterWithResearch();
  }

  filterWithResearch() {
    console.log(this.researchDate);
    this.availabilityTimeSlotListVisible = this.availabilityTimeSlotList.filter(availabilityTimeSlot => {
      return availabilityTimeSlot.date.includes(this.researchDate);
    });
  }
}
