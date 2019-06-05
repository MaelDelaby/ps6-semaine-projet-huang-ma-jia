import { Component, OnInit} from '@angular/core';
import { User } from 'src/models/user';
import { getUser } from 'src/app/cookies'


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  public user: User;

  constructor() {
    this.user = getUser();
    if (this.user != null){
      if (this.user.isAdmin == true) {
        window.location.href = 'http://localhost:4200/adminHomePage';
      } else {
        window.location.href = 'http://localhost:4200/studentHomePage';
      }
    }
  }

  ngOnInit() {
  }
}
