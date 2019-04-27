import {Injectable} from '@angular/core';
import {Company} from '../../models/company';
import {BehaviorSubject, Subject} from 'rxjs';
import {COMPANIES_MOCKED} from '../../mocks/companies';
import {HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyList: Company[] = [];
  private companiesFiltered: Company[] = [];
  public companies$: BehaviorSubject<Company[]> = new BehaviorSubject(this.companyList);
  public countryId: number = null;

  private companiesUrl = 'http://localhost:9428/api/companies/';

  constructor(private http: HttpClient) {
    this.loadCompanies(this.companiesUrl);
  }
  loadCompanies(URL): void {
    this.http.get<Company[]>(URL).subscribe( companies => {
      this.companyList = companies;
      this.companies$.next(companies);
    });
  }
  public setCountryId(id: number) {
    this.countryId = id;
    this.http.get<Company[]>(this.companiesUrl + '?countryId=' + id).subscribe(value => {
      this.companyList = value;
      this.companies$.next(value);
    });
  }

  public formChange(form: FormGroup) {
    this.http.get<Company[]>(this.companiesUrl + '?countryId=' + this.countryId
      + (form.getRawValue().sector ? ('&sector=' + form.getRawValue().sector) : '')
      + (form.getRawValue().specialty ? ('&specialty=' + form.getRawValue().specialty) : '')
    ).subscribe(value => {
      this.companyList = value;
      this.companies$.next(value);
    });
  }
 public filterCompanies(filiere= null, specialite= null, continent= null, secteur= null, taile= null) {
   this.http.get<Company[]>(this.companiesUrl + 'search/?filiere=' + filiere + '&specialite=' + specialite + '&continent=' +
     continent + '&secteur=' + secteur + '&taile=' + taile).subscribe(value => {
     this.companyList = value;
     this.companies$.next(value);
   });
 }
}
