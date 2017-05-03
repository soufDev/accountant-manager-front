import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.services';
import {Router} from '@angular/router';

@Component({
  /* tslint:disable */
  selector: '.user-box',
  /* tslint:disable */
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent implements OnInit {
  user: User = new User();
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.getUser();
    console.log(this.user)
  }

  getUser(): void {
    this.authService
      .getUserAuth()
      .then(user => this.user = user);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }


}
