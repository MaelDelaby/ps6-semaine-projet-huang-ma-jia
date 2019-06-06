import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/services/request/request.service';
import { UserService } from 'src/services/user/user.service';
import { getUser } from 'src/app/cookies';
import { Request } from 'src/models/request';
import { User } from 'src/models/user';

@Component({
  selector: 'app-student-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class StudentHomePageComponent implements OnInit {

  public request: Request;

  public user: User;

  constructor(public requestService: RequestService,
    public userService: UserService) {
    
    this.requestService.setStudentId(getUser().id);
    this.requestService.request$.subscribe(value => {
      this.request = value;
      if (this.request){
        this.userService.users$.subscribe(value => {
          this.user = value.find(user => user.id == this.request.studentId);
        });
      }
    });
  }

  ngOnInit() {

  }
}
