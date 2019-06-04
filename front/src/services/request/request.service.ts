import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Company} from '../../models/company';
import {Internship} from '../../models/internship';

@Injectable({
  providedIn: 'root'
})

export class RequestService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private companyList: Company[];
  private internshipList: Internship[];

  private companiesUrl = 'http://localhost:9428/api/companies/requests';
  private internshipsUrl = 'http://localhost:9428/api/internships/requests';

  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public companies$: BehaviorSubject<Company[]> = new BehaviorSubject(this.companyList);
  public internships$: BehaviorSubject<Internship[]> = new BehaviorSubject(this.internshipList);

  constructor(
    private http: HttpClient) {
        this.http.get<Company[]>(this.companiesUrl).subscribe(value => {
            this.companyList = value;
            this.companies$.next(value);
        });

        this.http.get<Internship[]>(this.internshipsUrl).subscribe(value => {
            this.internshipList = value;
            this.internships$.next(value);
        });
    }
}
