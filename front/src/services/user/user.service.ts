import {Injectable} from '@angular/core';
import {User} from '../../models/user';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList: User[] = [];
  public users$: BehaviorSubject<User[]> = new BehaviorSubject(this.userList);
  public countryId: number = null;

  private usersUrl = 'http://localhost:9428/api/users/';

  constructor(private http: HttpClient) {
    this.http.get<User[]>(this.usersUrl).subscribe( users => {
      this.userList = users;
      this.users$.next(users);
    });
  }

  public setCountryId(id: number) {
    this.countryId = id;
    this.http.get<User[]>(this.usersUrl + '?countryId=' + id).subscribe(users => {
      this.userList = users;
      this.users$.next(users);
    });
  }

  
  public formChange(form: FormGroup) {
    this.http.get<User[]>(this.usersUrl + '?' 
      + (this.countryId != null ? 'countryId=' + this.countryId : '')
      + (form.getRawValue().sector != '- Filière -' ? ('&sector=' + form.getRawValue().sector) : '')
      + (form.getRawValue().specialty != '- Spécialité -' ? ('&specialty=' + form.getRawValue().specialty) : '')
    ).subscribe(users => {
      this.userList = users;
      this.users$.next(users);
    });
  }
}
