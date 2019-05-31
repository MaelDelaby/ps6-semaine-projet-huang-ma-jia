import {Injectable} from '@angular/core';
import {Student} from '../../models/student';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentList: Student[] = [];
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);
  public countryId: number = null;

  private studentsUrl = 'http://localhost:9428/api/students/';

  constructor(private http: HttpClient) {
    this.http.get<Student[]>(this.studentsUrl).subscribe( students => {
      this.studentList = students;
      this.students$.next(students);
    });
  }

  public setCountryId(id: number) {
    this.countryId = id;
    this.http.get<Student[]>(this.studentsUrl + '?countryId=' + id).subscribe(students => {
      this.studentList = students;
      this.students$.next(students);
    });
  }

  
  public formChange(form: FormGroup) {
    this.http.get<Student[]>(this.studentsUrl + '?' 
      + (this.countryId != null ? 'countryId=' + this.countryId : '')
      + (form.getRawValue().sector != '- Filière -' ? ('&sector=' + form.getRawValue().sector) : '')
      + (form.getRawValue().specialty != '- Spécialité -' ? ('&specialty=' + form.getRawValue().specialty) : '')
    ).subscribe(students => {
      this.studentList = students;
      this.students$.next(students);
    });
  }
}
