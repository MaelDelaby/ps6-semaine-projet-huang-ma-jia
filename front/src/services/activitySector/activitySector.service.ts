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

  //private countryList: Country[] = []; A remettre quand le back marche
  private activitySectorList: String[];

  private activitySectorsUrl = 'http://localhost:9428/api/activitySectors/';

  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public activitySectors$: BehaviorSubject<String[]> = new BehaviorSubject(this.activitySectorList);

  constructor(
    private http: HttpClient) {
        this.http.get<String[]>(this.activitySectorsUrl).subscribe(value => {
            this.activitySectorList = value;
            this.activitySectors$.next(value);
        });
    }

}
