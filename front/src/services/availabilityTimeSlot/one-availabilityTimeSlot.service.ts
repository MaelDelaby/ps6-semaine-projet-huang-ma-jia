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
  private modifyAvailabilityTimeSlotsUrl = 'http://172.20.10.2:1880/modifyAvailabilityTimeSlot/';

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

  public getAvailabilityTimeSlotByReceiverId(){
    this.http.get<AvailabilityTimeSlot[]>(this.availabilityTimeSlotsUrl + this.receiverId).subscribe(value => {
      this.availabilityTimeSlot = value;
      this.availabilityTimeSlot$.next(value);
    });
  }

  public deleteAvailabilityTimeSlot(id: number){
    this.http.delete<AvailabilityTimeSlot[]>(this.availabilityTimeSlotsUrl + id).subscribe(value => {
      this.getAvailabilityTimeSlotByReceiverId();
      this.modifyAvailabilityTimeSlot();
    });
  }

  public addAvailabilityTimeSlot(availabilityTimeSlot: AvailabilityTimeSlot){

    availabilityTimeSlot.receiverId = getUser().id;

    this.http.post(this.availabilityTimeSlotsUrl, availabilityTimeSlot, httpOptionsBase).subscribe(
      (availabilityTimeSlotAdded) => {
        this.getAvailabilityTimeSlotByReceiverId();
        this.modifyAvailabilityTimeSlot();
      }
    );
  }

  private modifyAvailabilityTimeSlot(){
    this.http.put(this.modifyAvailabilityTimeSlotsUrl, "", httpOptionsBase).subscribe(
      (availabilityTimeSlotAdded) => {
      }
    );
  }
}
