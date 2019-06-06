import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendrier-availabilityTimeSlot',
  templateUrl: './calendrier-availabilityTimeSlot.component.html',
  styleUrls: ['./calendrier-availabilityTimeSlot.component.scss']
})
export class CalendrierAvailabilityTimeSlotComponent implements OnInit {

  public date: string;

  constructor() {

  }

  ngOnInit() {
    let today = new Date();
    this.date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  }
}
