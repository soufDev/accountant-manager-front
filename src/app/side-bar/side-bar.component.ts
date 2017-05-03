import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {AuthService} from '../services/auth.services';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  user: User = new User();
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUser();
    console.log(this.user)
  }

  getUser(): void {
    this.authService
      .getUserAuth()
      .then(user => {
        console.log("user : "+user);
        this.user = user
      });
  }

}
