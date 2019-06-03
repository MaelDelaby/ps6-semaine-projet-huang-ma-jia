import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})

export class OneUserService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private user: User;

  private usersUrl = 'http://localhost:9428/api/users/';

  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public user$: BehaviorSubject<User> = new BehaviorSubject(this.user);

  constructor(
    private http: HttpClient) {
     }

  public setUserId(id : number) {
    this.http.get<User>(this.usersUrl+id).subscribe(value => {
      this.user = value;
      this.user$.next(value);
    });
  }
}
