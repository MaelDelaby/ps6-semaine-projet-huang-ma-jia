import {Injectable} from '@angular/core';
import {Internship} from '../../models/internship';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { httpOptionsBase, serverUrl } from '../../configs/server.config';
import { RequestService } from '../request/request.service';
import { getUser } from 'src/app/cookies';

@Injectable({
  providedIn: 'root'
})
export class InternshipService {
  private internshipList: Internship[] = [];
  public internships$: BehaviorSubject<Internship[]> = new BehaviorSubject(this.internshipList);
  public companyId: number = null;

  private internshipsUrl = 'http://localhost:9428/api/internships/';

  constructor(private http: HttpClient,
    private requestService: RequestService) {
  }

  public getInternship(){
    this.http.get<Internship[]>(this.internshipsUrl + '?validate=true&companyId=' + this.companyId).subscribe(internships => {
      this.internshipList = internships;
      this.internships$.next(internships);
    });  
  }

  public setCompanyId(id: number) {
    this.companyId = id;
    this.getInternship();
  }

  public addInternship(internship: Internship, createRequest: boolean){
    this.http.post(this.internshipsUrl, internship, httpOptionsBase).subscribe(
      (internshipAdded) => {
        if (createRequest){
          this.requestService.addRequest(Object.assign(
            {
              companyId:  0,
              internshipId: Object.assign(internshipAdded).id,
              studentId: getUser().id,
              date: "000",
              waitAppointment: false
            }));
        }
      }
    );
  }

  public deleteInternship(id: number){
    this.http.delete<Internship>(this.internshipsUrl + id, httpOptionsBase).subscribe(
      (internshipDeleted) => this.getInternship()
    );
  }
}
