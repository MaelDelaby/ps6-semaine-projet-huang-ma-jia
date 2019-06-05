import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Country} from '../../models/country';

@Injectable({
  providedIn: 'root'
})

export class OneCountryService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private country: Country;

  private countriesUrl = 'http://localhost:9428/api/countries/';

  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public country$: BehaviorSubject<Country> = new BehaviorSubject(this.country);

  constructor(
    private http: HttpClient) {
     }

  public setCountryId(id : string) {
    this.http.get<Country>(this.countriesUrl+id).subscribe(value => {
      this.country = value;
      this.country$.next(value);
    });
  }
}
