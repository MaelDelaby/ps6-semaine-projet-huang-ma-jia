import {Injectable} from '@angular/core';
import {Internship} from '../../models/internship';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InternshipService {
  private internshipList: Internship[] = [];
  public internships$: BehaviorSubject<Internship[]> = new BehaviorSubject(this.internshipList);
  public companyId: number = null;

  private internshipsUrl = 'http://localhost:9428/api/internships/';

  constructor(private http: HttpClient) {
  }

  public setCompanyId(id: number) {
    this.companyId = id;
    this.http.get<Internship[]>(this.internshipsUrl + '?companyId=' + id).subscribe(internships => {
      this.internshipList = internships;
      this.internships$.next(internships);
    });
  }

  public formChange(form: FormGroup) {
    this.http.get<Internship[]>(this.internshipsUrl + '?companyId=' + this.companyId
    ).subscribe(internships => {
      this.internshipList = internships;
      this.internships$.next(internships);
    });
  }
}
