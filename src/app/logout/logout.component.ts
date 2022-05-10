import { Component, OnInit } from '@angular/core';
import { UtileService } from '../UtileService';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private UtileService: UtileService) {}

  ngOnInit(): void {
    this.UtileService.setToLocalStorage("LOGGED_IN_USER_ID", null);
  }
}
