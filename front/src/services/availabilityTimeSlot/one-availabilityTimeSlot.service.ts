import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {AvailabilityTimeSlot} from '../../models/availabilityTimeSlot';
import {RequestService} from "../request/request.service";
import {httpOptionsBase} from "../../configs/server.config";
import {getUser} from "../../app/cookies";

@Injectable({
  providedIn: 'root'
})

export class OneAvailabilityTimeSlotService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private availabilityTimeSlot: AvailabilityTimeSlot[] = [];

  private availabilityTimeSlotsUrl = 'http://localhost:9428/api/availabilityTimeSlot/';

  private receiverId: number;
  private date: string;

  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public availabilityTimeSlot$: BehaviorSubject<AvailabilityTimeSlot[]> = new BehaviorSubject(this.availabilityTimeSlot);

  constructor(private http: HttpClient,
              private requestService: RequestService) {
     }

  public setReceiverIdAndDate(id : number, date: string) {
    this.receiverId = id;
    this.date = date
    this.getAvailabilityTimeSlotByReceiverId();
  }

  public setReceiverId(id : number) {
    this.receiverId = id;
    this.getAvailabilityTimeSlotByReceiverId();
  }

  public getAvailabilityTimeSlotByReceiverIdAndDate(){
    this.http.get<AvailabilityTimeSlot[]>(this.availabilityTimeSlotsUrl + "findByDateAndReceiverId/?" + this.receiverId + "&" + this.date).subscribe(value => {
      this.availabilityTimeSlot = value;
      this.availabilityTimeSlot$.next(value);
    });
  }

  public getAvailabilityTimeSlotByReceiverId(){
    this.http.get<AvailabilityTimeSlot[]>(this.availabilityTimeSlotsUrl + this.receiverId).subscribe(value => {
      this.availabilityTimeSlot = value;
      this.availabilityTimeSlot$.next(value);
    });
  }

  public deleteAvailabilityTimeSlot(id: number){
    this.http.delete<AvailabilityTimeSlot[]>(this.availabilityTimeSlotsUrl + id).subscribe(value => {
      this.getAvailabilityTimeSlotByReceiverId();
    });
  }

  public addAvailabilityTimeSlot(availabilityTimeSlot: AvailabilityTimeSlot){

    this.http.post(this.availabilityTimeSlotsUrl, availabilityTimeSlot, httpOptionsBase).subscribe(
      (availabilityTimeSlotAdded) => {
        this.requestService.addRequest(Object.assign(
          {
            id: Object.assign(availabilityTimeSlotAdded).id,
            receiverId: getUser().id,
            date: "22-03-2019",
            beginningHour: "10:30",
            endingHour: "10:45"
          }));

      }
    );
  }
}
