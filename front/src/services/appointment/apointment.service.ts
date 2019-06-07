import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import { Appointment } from 'src/models/appointment';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private appointmentList: String[];
  private nextStudentId: number;

  private appointmentUrl = 'http://localhost:9428/api/appointment/';

  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public appointments$: BehaviorSubject<String[]> = new BehaviorSubject(this.appointmentList);
  public nextStudentId$: BehaviorSubject<number> = new BehaviorSubject(this.nextStudentId);

  constructor(
    private http: HttpClient) {
 
    }

    public getAppointments(){
      this.http.get<String[]>(this.appointmentUrl).subscribe(value => {
        this.appointmentList = value;
        this.appointments$.next(value);
      });
    }

    public next(id: number){
      this.http.get<Appointment>(this.appointmentUrl+"next?receiverId=" + id).subscribe(value => {
        if (value){
          this.nextStudentId = value.askerId;
          this.nextStudentId$.next(value.askerId);
        }
      });
    }
}
