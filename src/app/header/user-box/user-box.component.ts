import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.services';
import {UserService} from '../../services/user.service';

@Component({
  /* tslint:disable */
  selector: '.user-box',
  /* tslint:disable */
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css'],
})
export class UserBoxComponent implements OnInit {
  public user;
  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.user = localStorage.getItem('currentUser');
    console.log('this.user '+this.user);
  }

  logout() {
    this.authService.logout();
  }

}
