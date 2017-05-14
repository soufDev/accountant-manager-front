import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.services';
import {User} from '../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: User = new User();
  constructor(
    private authenticateService: AuthService,
    router: Router) {
  }

  ngOnInit() {
    this.getUserInfo();
  }

  //retrieve user informations
  getUserInfo() {
    this.authenticateService.getUserAuth().
    then(user => {
      console.log('login user: '+user.id);
      this.user = user;
      let id = user.id;
      this.authenticateService.getProfile(id).subscribe(
        response => {
          localStorage.setItem('userInfo', JSON.stringify({'user': user}));
          localStorage.setItem('profile', JSON.stringify({'profile': response}));
          console.log('response profile dashboard', response.id)
        }, error => console.log('error profile dashboard', error)
      )
    }, error => console.log('error get user info: '+error))
  }

  // retrieve profile user
  getProfile(id) {
    this.authenticateService.getProfile(id).subscribe(
      response => {

        console.log('response profile dashboard', response.id)
      }, error => console.log('error profile dashboard', error)
    )
  }
}
