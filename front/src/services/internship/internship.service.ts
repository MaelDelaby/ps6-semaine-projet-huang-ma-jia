import {Injectable} from '@angular/core';
import {Internship} from '../../models/internship';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { httpOptionsBase, serverUrl } from '../../configs/server.config';

@Injectable({
  providedIn: 'root'
})
export class InternshipService {
  private internshipList: Internship[] = [];
  public internships$: BehaviorSubject<Internship[]> = new BehaviorSubject(this.internshipList);
  public companyId: number = null;

  private internshipsUrl = 'http://localhost:9428/api/internships/?validate=true';

  constructor(private http: HttpClient) {
  }

  public getInternship(){
    this.http.get<Internship[]>(this.internshipsUrl + '&companyId=' + this.companyId).subscribe(internships => {
      this.internshipList = internships;
      this.internships$.next(internships);
    });  
  }

  public setCompanyId(id: number) {
    this.companyId = id;
    this.getInternship();
  }

  public formChange(form: FormGroup) {
    this.http.get<Internship[]>(this.internshipsUrl + '&companyId=' + this.companyId
    ).subscribe(internships => {
      this.internshipList = internships;
      this.internships$.next(internships);
    });
  }

  public addInternship(internship: Internship){
    this.http.post(this.internshipsUrl, internship, httpOptionsBase).subscribe(
      (_ticket) => {
      }
    );
  }
}
