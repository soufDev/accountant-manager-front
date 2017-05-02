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

  constructor(
    private authenticateSerive: AuthService,
    router: Router) { }

  ngOnInit() {
  }

}
