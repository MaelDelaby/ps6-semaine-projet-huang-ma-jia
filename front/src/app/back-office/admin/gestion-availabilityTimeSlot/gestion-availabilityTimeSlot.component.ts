import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  
  public availabilityTimeSlotForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    public oneAvailabilityTimeSlotService: OneAvailabilityTimeSlotService) {

    this.oneAvailabilityTimeSlotService.setReceiverId(getUser().id);
    this.oneAvailabilityTimeSlotService.availabilityTimeSlot$.subscribe((availabilityTimeSlot) => {
      this.availabilityTimeSlotTicketList = availabilityTimeSlot;
    });

    this.availabilityTimeSlotForm = this.formBuilder.group({
      date: [''],
      beginningHour: [''],
      endingHour: [''],
    });
  }

  ngOnInit() {
  }

  addAvailabilityTimeSlot(){
    if (this.availabilityTimeSlotForm.getRawValue().date == "" ||
      this.availabilityTimeSlotForm.getRawValue().beginningHour == "" ||
      this.availabilityTimeSlotForm.getRawValue().endingHour == ""){
    }
    this.oneAvailabilityTimeSlotService.addAvailabilityTimeSlot(this.availabilityTimeSlotForm.getRawValue() as AvailabilityTimeSlot);
    this.oneAvailabilityTimeSlotService.getAvailabilityTimeSlotByReceiverId();
    this.fillForm();
  }

  fillForm(){
    this.availabilityTimeSlotForm.setValue({
    date: '',
    beginningHour: '',
    endingHour: '',
    });
  }
}
