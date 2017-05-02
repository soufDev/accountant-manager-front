import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {AuthService} from '../services/auth.services';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.user;
  }

}
