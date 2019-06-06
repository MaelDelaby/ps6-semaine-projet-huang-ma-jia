import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ActivitySectorService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private appointmentList: String[];

  private appointmentUrl = 'http://localhost:9428/api/appointment/';

  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public appointments$: BehaviorSubject<String[]> = new BehaviorSubject(this.appointmentList);

  constructor(
    private http: HttpClient) {
        this.http.get<String[]>(this.appointmentUrl).subscribe(value => {
            this.appointmentList = value;
            this.appointments$.next(value);
        });
    }
}
