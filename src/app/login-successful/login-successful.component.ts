import { Component, OnInit } from '@angular/core';
import { UtileService } from '../UtileService';

@Component({
  selector: 'app-login-successful',
  templateUrl: './login-successful.component.html',
  styleUrls: ['./login-successful.component.scss']
})
export class LoginSuccessfulComponent implements OnInit {
  LOGGED_IN_USER_ID:string;
  LOGGED_IN_USER_NAME:string;
  constructor(private UtileService:UtileService) { }

  ngOnInit(): void {
    let users = this.UtileService.getFromLocalStorage('users');
    for (let i = 0; i < users.length; i++) {
      this.LOGGED_IN_USER_NAME = users[i].name;
      this.LOGGED_IN_USER_ID = users[i].email;
    } 
  }

}
