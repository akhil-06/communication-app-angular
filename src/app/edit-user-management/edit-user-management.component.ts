import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtileService } from '../UtileService';

@Component({
  selector: 'app-edit-user-management',
  templateUrl: './edit-user-management.component.html',
  styleUrls: ['./edit-user-management.component.scss']
})
export class EditUserManagementComponent implements OnInit {
  
  editUserForm: FormGroup;
  LOGGED_IN_USER_ID: string = this.UtileService.getFromLocalStorage("LOGGED_IN_USER_ID");
  users = this.UtileService.getFromLocalStorage("users");
  userToEdit: any;

  constructor(
    private fb: FormBuilder,
    private UtileService: UtileService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // prevent access 
    this.UtileService.allowOnlyAuthUser();

    // user to edit
    const id = this.route.snapshot.paramMap.get('id');
    this.userToEdit = this.UtileService.getUserById(id);

    this.editUserForm = this.fb.group({
      fullName: [this.userToEdit.name, [Validators.required, Validators.minLength(3)]],
      email: [this.userToEdit.email, [Validators.required, Validators.email]]
    })

  }

  editUserSave() {
    let fullName = this.editUserForm.get('fullName').value;
    let email = this.editUserForm.get('email').value;

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == this.userToEdit.id) {
        this.users[i].name = fullName;
        this.users[i].email = email;
        break;
      }
    }
    this.UtileService.setToLocalStorage("users", this.users);
    this.router.navigate(['/users-management']);
  }
}
