import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtileService } from '../UtileService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  LOGGED_IN_USER_ID: string;
  constructor(private fb: FormBuilder, private UtileService: UtileService,private router:Router) {}

  ngOnInit(): void {
    const LOGGED_IN_USER_ID =
      this.UtileService.getFromLocalStorage('LOGGED_IN_USER_ID');
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    console.log(this.loginForm);
  }

  save(): void {
    // alert(JSON.stringify(this.loginForm.value));
    let users = this.UtileService.getFromLocalStorage('users');
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == email && users[i].password == password) {
        this.LOGGED_IN_USER_ID = users[i].name;
        this.UtileService.setToLocalStorage(
          'LOGGED_IN_USER_ID',
          this.LOGGED_IN_USER_ID
        );
        this.router.navigate(['/login-successful']);
        return;
      }
    }
    alert('enter correct email or password');
  }
}
