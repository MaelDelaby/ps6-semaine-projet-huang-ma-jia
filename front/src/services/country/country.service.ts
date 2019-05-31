import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Country} from '../../models/country';

@Injectable({
  providedIn: 'root'
})

export class CountryService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private countryList: Country[] = [];

  private countriesUrl = 'http://localhost:9428/api/countries/';
  private companiesUrl = 'http://localhost:9428/api/companies/';
  private internshipUrl = 'http://localhost:9428/api/internships/';

  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public countries$: BehaviorSubject<Country[]> = new BehaviorSubject(this.countryList);

  constructor(
    private http: HttpClient) {
    this.getCountries();
  }

  public getCountries() {
    this.http.get<Country[]>(this.countriesUrl).subscribe(value => {
      value.forEach(value2 => {
        this.http.get<number>(this.internshipUrl + 'nbIntership?countryId=' + value2.id).subscribe(number =>
        value2.nbIntership = number);
        this.http.get<number>(this.companiesUrl + 'companyNb?countryId=' + value2.id).subscribe(number =>
        value2.nbCompany = number);
        this.http.get<number>(this.internshipUrl + 'averageRatingIntership?countryId=' + value2.id).subscribe(number =>
        value2.averageRatingIntership = number);
      });
      this.countryList = value;
      this.countries$.next(value);
    });
  }
}
