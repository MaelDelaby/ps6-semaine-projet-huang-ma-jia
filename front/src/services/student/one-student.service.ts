import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Student} from '../../models/student';

@Injectable({
  providedIn: 'root'
})

export class OneStudentService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private student: Student;

  private studentsUrl = 'http://localhost:9428/api/students/';

  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public student$: BehaviorSubject<Student> = new BehaviorSubject(this.student);

  constructor(
    private http: HttpClient) {
     }

  public setStudentId(id : number) {
    this.http.get<Student>(this.studentsUrl+id).subscribe(value => {
      this.student = value;
      this.student$.next(value);
    });
  }
}
