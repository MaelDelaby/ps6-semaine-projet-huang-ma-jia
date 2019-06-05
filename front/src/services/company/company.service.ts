import {Injectable} from '@angular/core';
import {Company} from '../../models/company';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { httpOptionsBase, serverUrl } from '../../configs/server.config';
import { RequestService } from '../request/request.service';
import { getUser } from 'src/app/cookies';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyList: Company[] = [];
  public companies$: BehaviorSubject<Company[]> = new BehaviorSubject(this.companyList);
  public countryId: string = null;
  private companiesUrl = 'http://localhost:9428/api/companies/';

  constructor(private http: HttpClient,
    private requestService: RequestService) {
  }

  public setCountryId(id: string) {
    this.countryId = id;
    this.getCompany();
  }

  public getCompany(){
    this.http.get<Company[]>(this.companiesUrl + '?validate=true' + (this.countryId != null ? '&countryId=' + this.countryId : '')).subscribe(companies => {
      this.companyList = companies;
      this.companies$.next(companies);
    });
  }

  public formChange(form: FormGroup) {
    this.http.get<Company[]>(this.companiesUrl +'?validate=true'
      + (this.countryId != null ? '&countryId=' + this.countryId : '')
      + (form.getRawValue().sector != '- Filière -' ? ('&sector=' + form.getRawValue().sector) : '')
      + (form.getRawValue().specialty != '- Spécialité -' ? ('&specialty=' + form.getRawValue().specialty) : '')
      + (form.getRawValue().continent && form.getRawValue().continent != '- Continent -' ? ('&continent=' + form.getRawValue().continent) : '')
      + (form.getRawValue().secteur ? ('&secteur=' + form.getRawValue().secteur) : '')
      + ((form.getRawValue().activitySector && form.getRawValue().activitySector != '- Secteur d\'activité -') ? ('&activitySector=' + form.getRawValue().activitySector) : '')
      + (form.getRawValue().size1 && form.getRawValue().size2 && form.getRawValue().size3 ? '' : 
        ('&size1=' + form.getRawValue().size1) +
        ('&size2=' + form.getRawValue().size2) +
        ('&size3=' + form.getRawValue().size3))
    ).subscribe(companies => {
      this.companyList = companies;
      this.companies$.next(companies);
    });
  }

  public addCompany(company: Company, createRequest: Boolean){
    this.http.post(this.companiesUrl, company, httpOptionsBase).subscribe(
      (companyAdded) => {
        if (createRequest){
          this.requestService.addRequest(Object.assign(
            {
              companyId: Object.assign(companyAdded).id,
              internshipId: 0,
              studentId: getUser().id,
              date: "000"
            }));
        }
      }
    );
  }

  public deleteCompany(id: number){
    this.http.delete<Company>(this.companiesUrl + id, httpOptionsBase).subscribe(
      (companyDeleted) => this.getCompany()
    );
  }
}
