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

  public monthNames : string[] = ["", "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"
  ];

  public dayNames : string[] = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

  public year : number;
  public month : number;
  public day : number;
  public numDay : number;

  constructor(public oneAvailabilityTimeSlotService: OneAvailabilityTimeSlotService) {
  }

  stringToDate(_date) {

    var formatItems=_date.split("-");

    var year=parseInt(formatItems[0]);
    var month=parseInt(formatItems[1]);
    var day=parseInt(formatItems[2]);
    var formatedDate = new Date(year, month, day);
    return formatedDate;
  }

  ngOnInit() {
    console.log("nnn" + this.availabilityTimeSlotTicket.date);
    let newDate = this.stringToDate(this.availabilityTimeSlotTicket.date);
    this.year = newDate.getFullYear();
    this.month = newDate.getMonth();
    this.day = newDate.getDate();
    this.numDay = newDate.getDay()-2;
  }

  delete(id: number){
    this.oneAvailabilityTimeSlotService.deleteAvailabilityTimeSlot(id);
  }

}
