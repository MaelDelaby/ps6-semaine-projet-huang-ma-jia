import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {PartnerHousing} from '../../models/partnerHousing';

@Injectable({
  providedIn: 'root'
})

export class PartnerHousingService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  //private countryList: Country[] = []; A remettre quand le back marche
  private partnerHousingList: PartnerHousing[];

  private partnersHousingsUrl = 'http://localhost:9428/api/partnersHousings/';

  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public partnersHousings$: BehaviorSubject<PartnerHousing[]> = new BehaviorSubject(this.partnerHousingList);

  constructor(
    private http: HttpClient) {
    }

    public setCountryId(id : string) {
        this.http.get<PartnerHousing[]>(this.partnersHousingsUrl + "?countryId=" + id).subscribe(value => {
            this.partnerHousingList = value;
            this.partnersHousings$.next(value);
        });
    }
}
