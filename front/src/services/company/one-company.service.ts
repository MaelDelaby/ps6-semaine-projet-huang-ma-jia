import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Company} from '../../models/company';

@Injectable({
  providedIn: 'root'
})

export class OneCompanyService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private company: Company;

  private companiesUrl = 'http://localhost:9428/api/companies/';

  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public company$: BehaviorSubject<Company> = new BehaviorSubject(this.company);

  constructor(
    private http: HttpClient) {
     }

  public setCompanyId(id : number) {
    this.http.get<Company>(this.companiesUrl+id).subscribe(value => {
      this.company = value;
      this.company$.next(value);
    });
  }
}
