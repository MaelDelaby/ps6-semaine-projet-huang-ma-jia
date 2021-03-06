import { Component, OnInit} from '@angular/core';
import { User } from 'src/models/user';
import { getUser, deleteCookie } from 'src/app/cookies'

@Component({
  selector: 'app-admin-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class AdminNavigationBarComponent implements OnInit {

  public user: User;

  constructor() {
    this.user = getUser();
    if (this.user == null){
      window.location.href = 'http://localhost:4200/homePage';
    } else if (this.user.isAdmin == false) {
      window.location.href = 'http://localhost:4200/studentHomePage';
    }
  }

  ngOnInit() {
  }

  public deconnection(){
    deleteCookie();
    window.location.href = 'http://localhost:4200/homePage';
  }
}