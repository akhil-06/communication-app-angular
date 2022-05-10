import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UtileService {
  
  constructor(private router: Router) {}

  setToLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getFromLocalStorage(key: string): any {
    let getFromLocalStorage = JSON.parse(localStorage.getItem(key));
    let data = getFromLocalStorage ? getFromLocalStorage : [];
    return data;
  }

  loggedInUserId(): string {
    let getFromLocalStorage = JSON.parse(
      localStorage.getItem('LOGGED_IN_USER_ID')
    );
    if (getFromLocalStorage === undefined || getFromLocalStorage == null) {
      return null;
    } else {
      return getFromLocalStorage;
    }
  }

  isEmailValid(email: string): boolean {
    let aPos = email.indexOf("@");
    let dotPos = email.lastIndexOf(".");

    if (aPos < 1 || dotPos - aPos < 2) {
      return false;
    } else {
      return true;
    }
  }

  getUserById(id: string) {
    let users = this.getFromLocalStorage("users");
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == id) {
        let user = users[i];
        // deleting password
        delete user.password;
        return user;
      }
    }
  }

  getDocByID(id: string){
    let docs = this.getFromLocalStorage("docs");
    for (let i = 0; i < docs.length; i++) {
        if (docs[i].id == id) {
            return docs[i];
        }
    }
  }


  allowOnlyAuthUser(){
    if(this.loggedInUserId() == null){
      this.router.navigateByUrl('/welcome');
    }
  }
}
