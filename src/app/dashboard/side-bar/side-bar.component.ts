import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.services';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  user: User = new User();
  profile: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('profile') && localStorage.getItem('userInfo')){
      this.user = JSON.parse(localStorage.getItem('userInfo')).user; // = new User()
      this.profile = JSON.parse(localStorage.getItem('profile')).profile.type;
    }else {
      this.getUser();
    }

    //console.log(this.user)
  }

  getUser(): void {
    this.authService
      .getUserAuth()
      .then(user => {
        this.user = user;
        this.authService
          .getProfile(this.user.id)
          .subscribe(
            response => this.profile = response.type,
            error => console.log('error get profile '+ error)
          )
      });
  }

}
