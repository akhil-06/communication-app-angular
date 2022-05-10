import { Component, OnInit } from '@angular/core';
import { UtileService } from '../UtileService';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.scss'],
})
export class GroupChatComponent implements OnInit {
  dateTime: Date;
  LOGGED_IN_USER_ID: string;
  displayVal = '';
  chatObject:any;
  chats:any=[];
  // user:any;
  constructor(private UtileService: UtileService) {}

  ngOnInit(): void {
    this.chats = this.UtileService.getFromLocalStorage('data') ? this.UtileService.getFromLocalStorage('data') : [];
  }
  

  send() {
    this.chatObject =
    {
      inputBox: this.displayVal,
      time: this.dateTime
    };
    this.chats.push(this.chatObject);
    localStorage.setItem('data',JSON.stringify(this.chats));
    // const localData = localStorage.getItem('data');
    // const parseObject = JSON.parse(localData);
    
  }

  getValue(val: string) {
    this.dateTime = new Date();
    this.chatObject =
    {
      inputBox: this.displayVal,
      time: this.dateTime
    };
    let users = this.UtileService.getFromLocalStorage('chats');
    console.log(users)
    for (let i = 0; i < users.length; i++) {
      this.LOGGED_IN_USER_ID = users[i].name;
    }
    this.displayVal = val;
    this.chatObject.push({"inputBox":this.displayVal , "time":this.dateTime})
  }
}