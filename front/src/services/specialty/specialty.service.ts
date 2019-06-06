import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import { route } from '../routeConst';

@Injectable({
  providedIn: 'root'
})

export class SpecialtyService {
  private specialtyList: String[];

  private specialtiesUrl = route + '/specialties/';

  public specialties$: BehaviorSubject<String[]> = new BehaviorSubject(this.specialtyList);

  constructor(
    private http: HttpClient) {  
    }

    public setSectorName(name: string) {
      if (name == '- Filière -'){
        this.specialtyList = [];
        this.specialties$.next([]);
      } else {
        this.http.get<String[]>(this.specialtiesUrl + "?sector=" + name).subscribe(value => {
            this.specialtyList = value;
            this.specialties$.next(value);
        });
      }
    }
}
