import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getUser } from 'src/app/cookies'
import { User } from 'src/models/user';
import {OneAvailabilityTimeSlotService} from "../../../../../services/availabilityTimeSlot/one-availabilityTimeSlot.service";
import {AvailabilityTimeSlot} from "../../../../../models/availabilityTimeSlot";

@Component({
  selector: 'app-availibilityTimeSlot-form',
  templateUrl: './availibilityTimeSlot-form.component.html',
  styleUrls: ['../../../styleForms.scss']
})
export class AvailibilityFormComponent implements OnInit {

  public availabilityTimeSlotForm: FormGroup;

  public availabilityTimeSlotArray: any[];

  public user: User;

  constructor(public formBuilder: FormBuilder,
    public oneAvailabilityTimeSlotService: OneAvailabilityTimeSlotService) {

    this.user = getUser();

    this.oneAvailabilityTimeSlotService.availabilityTimeSlot$.subscribe((availabilityTimeSlot) => {
      this.availabilityTimeSlotArray = availabilityTimeSlot;
    });

    this.availabilityTimeSlotForm = this.formBuilder.group({
      date: [''],
      beginningHour: [''],
      endingHour: [''],
    });
  }

  ngOnInit() {
    this.fillForm();
  }

  addAvailabilityTimeSlot(){
    if (this.availabilityTimeSlotForm.getRawValue().date == "" ||
      this.availabilityTimeSlotForm.getRawValue().beginningHour == "" ||
      this.availabilityTimeSlotForm.getRawValue().endingHour == ""){
    }
    this.oneAvailabilityTimeSlotService.addAvailabilityTimeSlot(this.availabilityTimeSlotForm.getRawValue() as AvailabilityTimeSlot);
  }

  fillForm(){
    this.availabilityTimeSlotForm.setValue({
    date: '',
    beginningHour: '',
    endingHour: '',
    });
  }
}
