import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { UtileService } from '../UtileService';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {
  LOGGED_IN_USER_ID:string;
  LOGGED_IN_USER_NAME:string;
  DELETE_USER_ID: string = null;
  users:any = [];
  constructor(private UtileService:UtileService) { }

  ngOnInit(): void {
    this.UtileService.allowOnlyAuthUser();
    this.users = this.UtileService.getFromLocalStorage('users');
    this.LOGGED_IN_USER_ID = this.UtileService.getFromLocalStorage("LOGGED_IN_USER_ID");
  }

  delete(id) {
    this.DELETE_USER_ID = id;
  }

  userDeleteOk() {
    // delete user
    this.users = this.users.filter(user => user.id !== this.DELETE_USER_ID);
    this.UtileService.setToLocalStorage("users", this.users);

    // delete messages
    let messages = this.UtileService.getFromLocalStorage("messages");
    messages = messages.filter(msg => msg.senderId !== this.DELETE_USER_ID);
    this.UtileService.setToLocalStorage("messages", messages);
  }
}