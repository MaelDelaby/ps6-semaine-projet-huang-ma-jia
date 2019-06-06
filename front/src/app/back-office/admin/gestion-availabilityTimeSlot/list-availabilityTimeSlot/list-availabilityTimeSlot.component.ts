import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AvailabilityTimeSlot} from "../../../../../models/availabilityTimeSlot";

@Component({
  selector: 'app-list-AvailabilityTimeSlot',
  templateUrl: './list-availabilityTimeSlot.component.html',
  styleUrls: ['./list-availabilityTimeSlot.component.scss', '../../../styleForms.scss']
})
export class ListAvailabilityTimeSlotComponent implements OnChanges {

  @Input() availabilityTimeSlotList: AvailabilityTimeSlot[];
  @Input() availabilityTimeSlotListVisible: AvailabilityTimeSlot[];

  public researchDate: string = '';

  constructor() {
  };

  ngOnChanges() {
    console.log("dddd");
    this.researchDate = document.getElementById('date').value;
    this.filterWithResearch();
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
