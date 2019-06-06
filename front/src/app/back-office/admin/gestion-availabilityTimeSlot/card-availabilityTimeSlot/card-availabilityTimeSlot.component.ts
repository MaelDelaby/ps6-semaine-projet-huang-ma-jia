import {Component, Input, OnInit} from '@angular/core';
import {AvailabilityTimeSlot} from "../../../../../models/availabilityTimeSlot";
import {OneAvailabilityTimeSlotService} from "../../../../../services/availabilityTimeSlot/one-availabilityTimeSlot.service";

@Component({
  selector: 'app-card-AvailabilityTimeSlot',
  templateUrl: './card-availabilityTimeSlot.component.html',
  styleUrls: ['./card-availabilityTimeSlot.component.scss']
})

export class CardAvailabilityTimeSlotComponent implements OnInit {

  @Input()
  availabilityTimeSlotTicket: AvailabilityTimeSlot;

  constructor(public oneAvailabilityTimeSlotService: OneAvailabilityTimeSlotService) {
  }

  ngOnInit() {
  }

  delete(id: number){
    this.oneAvailabilityTimeSlotService.deleteAvailabilityTimeSlot(id);
  }
}
