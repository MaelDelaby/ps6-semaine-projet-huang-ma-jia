import { Component, OnInit } from '@angular/core';
import {AvailabilityTimeSlot} from "../../../../models/availabilityTimeSlot";
import {OneAvailabilityTimeSlotService} from "../../../../services/availabilityTimeSlot/one-availabilityTimeSlot.service";
import { getUser } from 'src/app/cookies'

@Component({
  selector: 'app-gestion-availabilityTimeSlot-page',
  templateUrl: './gestion-availabilityTimeSlot.component.html',
  styleUrls: ['../../styleForms.scss', './gestion-availabilityTimeSlot.scss']
})
export class GestionAvailabilityTimeSlotComponent implements OnInit {

  public availabilityTimeSlotTicketList: AvailabilityTimeSlot[] = [];

  constructor(public oneAvailabilityTimeSlotService: OneAvailabilityTimeSlotService) {
  }

  ngOnInit() {
    this.oneAvailabilityTimeSlotService.setReceiverId(getUser().id);
    this.oneAvailabilityTimeSlotService.availabilityTimeSlot$.subscribe((availabilityTimeSlot) => {
      this.availabilityTimeSlotTicketList = availabilityTimeSlot;
    });
  }
}
