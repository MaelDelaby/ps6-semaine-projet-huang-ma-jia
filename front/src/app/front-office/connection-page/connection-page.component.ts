import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user/user.service';
import { setUser } from 'src/app/cookies'

@Component({
  selector: 'app-connection-page',
  templateUrl: './connection-page.component.html',
  styleUrls: ['../../back-office/styleForms.scss']})
export class ConnectionPageComponent implements OnInit {

  public userArray: User[]

  public connectionPageForm: FormGroup

  public formError: boolean

  constructor(public formBuilder: FormBuilder,
    public userService: UserService) {

    this.userService.users$.subscribe((users) => {
      this.userArray = users;
    });

    this.connectionPageForm = this.formBuilder.group({
      userId: ['']
    });

    this.connectionPageForm.setValue({
      userId: ''
    });

    this.formError = false;
  }

  ngOnInit() {
  }

  connection(){
    console.log(this.userArray);
    let user = this.userArray.find(user => user.id == this.connectionPageForm.getRawValue().userId);

    if (user == null){
        this.formError = true;
        return;
    }

    setUser(user);

    if (user.isAdmin){
      window.location.href = 'http://localhost:4200/adminHomePage';
    } else {
      window.location.href = 'http://localhost:4200/studentHomePage';
    }
  }
}
