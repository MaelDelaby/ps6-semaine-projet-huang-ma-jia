import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Request} from '../../models/request';
import {User} from '../../models/user';
import {Company} from '../../models/company';
import {Internship} from '../../models/internship';
import { httpOptionsBase, serverUrl } from '../../configs/server.config';

@Injectable({
  providedIn: 'root'
})

export class RequestService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private request: Request;
  private student: User;
  private company: Company;
  private internship: Internship;
  private requestNb: number;

  private requestUrl = 'http://localhost:9428/api/requests/';
  private requestNextUrl = this.requestUrl + 'next/';
  private requestRejectUrl = this.requestUrl + 'reject/';
  private requestAcceptUrl = this.requestUrl + 'accept/';
  private requestLateUrl = this.requestUrl + 'late/';
  private requestAppointmentUrl = this.requestUrl + 'appointment/';
  private requestNbUrl = this.requestUrl + 'nb/';
  private userUrl = 'http://localhost:9428/api/users/';
  private companyUrl = 'http://localhost:9428/api/companies/';
  private internshipUrl = 'http://localhost:9428/api/internships/';


  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public request$: BehaviorSubject<Request> = new BehaviorSubject(this.request);
  public student$: BehaviorSubject<User> = new BehaviorSubject(this.student);
  public company$: BehaviorSubject<Company> = new BehaviorSubject(this.company);
  public internship$: BehaviorSubject<Internship> = new BehaviorSubject(this.internship);
  public requestNb$: BehaviorSubject<number> = new BehaviorSubject(this.requestNb);

  constructor(
    private http: HttpClient) {}

  public getNext(){
    this.http.get<Request>(this.requestNextUrl).subscribe(value => {
      this.request = value;
      this.request$.next(value);

      if (this.request){
        this.http.get<User>(this.userUrl + this.request.studentId).subscribe(value2 => {
          this.student = value2;
          this.student$.next(value2);
        });
        
        if (this.request.companyId != 0){
          this.http.get<Company>(this.companyUrl + this.request.companyId).subscribe(value2 => {
            this.company = value2;
            this.company$.next(value2);
          });
        } else {
          this.company = null;
          this.company$.next(null);
        }
        
        if (this.request.internshipId != 0){
          this.http.get<Internship>(this.internshipUrl + this.request.internshipId).subscribe(value2 => {
            this.internship = value2;
            this.internship$.next(value2);
          });
        } else {
          this.internship = null;
          this.internship$.next(null);
        }

        this.http.get<number>(this.requestNbUrl).subscribe(value2 => {
          this.requestNb = value2;
          this.requestNb$.next(value2);
        });
      }
    });
  }

  public reject(id: number){
    this.http.put<Request>(this.requestRejectUrl + id, "").subscribe(value => {
      this.getNext();
    });
  }

  public accept(id: number){
    this.http.put<Request>(this.requestAcceptUrl + id, "").subscribe(value => {
      this.getNext();
    });
  }

  public late(id: number){
    this.http.put<Request>(this.requestLateUrl + id, "").subscribe(value => {
      this.getNext();
    });
  }

  public appointment(id: number){
    this.http.put<Request>(this.requestAppointmentUrl + id, "").subscribe(value => {
      this.getNext();
    });
  }

  public setStudentId(id: number){
    this.http.get<Request>(this.requestUrl + "?studentId=" + id).subscribe(value => {
      this.request = value;
      this.request$.next(value);

      if (this.request){
        this.http.get<User>(this.userUrl + this.request.studentId).subscribe(value2 => {
          this.student = value2;
          this.student$.next(value2);
        });
        
        if (this.request.companyId != 0){
          this.http.get<Company>(this.companyUrl + this.request.companyId).subscribe(value2 => {
            this.company = value2;
            this.company$.next(value2);
          });
        } else {
          this.company = null;
          this.company$.next(null);
        }
        
        if (this.request.internshipId != 0){
          this.http.get<Internship>(this.internshipUrl + this.request.internshipId).subscribe(value2 => {
            this.internship = value2;
            this.internship$.next(value2);
          });
        } else {
          this.internship = null;
          this.internship$.next(null);
        }
      }
    });
  }

  public addRequest(request: Request){
    this.http.post(this.requestUrl, request, httpOptionsBase).subscribe(
      (_ticket) => {
      }
    );
  }
}
