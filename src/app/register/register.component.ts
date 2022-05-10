import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UtileService } from '../UtileService';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder,private UtileService:UtileService,private router:Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      });

    console.log(this.registerForm);
  }

  save():void{
    let users = this.UtileService.getFromLocalStorage("users");
    let name = this.registerForm.get('name')?.value;
    let email = this.registerForm.get('email')?.value;
    let password = this.registerForm.get('password')?.value;
    let confirmPassword = this.registerForm.get('confirmPassword')?.value;

    if(!this.UtileService.isEmailValid(email)){
      alert("email is invalid");
    }
    
    if(password!==confirmPassword){
      alert("both password should match");
      return
    }
    let userObject = {
      id:"U"+Number(new Date()),
      name:name,
      email:email,
      password:password,
      confirmPassword:confirmPassword
    }
    if(users.length==0){
      users.push(userObject);
      this.UtileService.setToLocalStorage("users",users);
      this.router.navigateByUrl('register-successful');
    }else{
      let isUserExists: boolean = false;
      for (let i=0;i<users.length;i++){
        if(users[i].email==email){
          isUserExists = true;
          break;
        }
      }
      if(isUserExists){
        alert("this email/user already exists");
      }
      else{
        users.push(userObject);
        this.UtileService.setToLocalStorage("users",users);
        this.router.navigateByUrl('register-successful');
      }
    }
  }
}
