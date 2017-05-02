import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  validationEqualPassword: boolean;

  constructor() { }

  ngOnInit() {
  }

  register() {

    if(this.user.password === this.user.confirm_password) {
      this.validationEqualPassword = false;
    } else
      this.validationEqualPassword = true;
  }
}
