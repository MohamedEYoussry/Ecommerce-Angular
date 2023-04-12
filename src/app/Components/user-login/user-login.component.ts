import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  newUser: boolean = false;
  constructor(private UserService: UserAuthService) {}
  ngOnInit(): void {
    this.newUser = this.UserService.UserState;
  }
  userLogin() {
    this.UserService.login('moessam@gmail.com', '01115404539');
    this.newUser = this.UserService.UserState;
  }
  userLogout() {
    this.UserService.logout();
    this.newUser = this.UserService.UserState;
  }
}