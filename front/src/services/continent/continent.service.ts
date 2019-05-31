import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ContinentService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  //private countryList: Country[] = []; A remettre quand le back marche
  private continentList: String[];

  private continentsUrl = 'http://localhost:9428/api/continents/';

  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public continents$: BehaviorSubject<String[]> = new BehaviorSubject(this.continentList);

  constructor(
    private http: HttpClient) {
        this.http.get<String[]>(this.continentsUrl).subscribe(value => {
            this.continentList = value;
            this.continents$.next(value);
        });
    }

}
