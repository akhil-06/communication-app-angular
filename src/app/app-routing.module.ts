import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { ManageDocumentsComponent } from './manage-documents/manage-documents.component';
import { LoginSuccessfulComponent } from './login-successful/login-successful.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { RegisterSuccessfulComponent } from './register-successful/register-successful.component';
import { LogoutComponent } from './logout/logout.component';
import { EditUserManagementComponent } from './edit-user-management/edit-user-management.component';
import { ShareManageDocumentComponent } from './share-manage-document/share-manage-document.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login-successful',
    component: LoginSuccessfulComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'register-successful',
    component: RegisterSuccessfulComponent,
  },
  {
    path: 'group-chat',
    component: GroupChatComponent,
  },
  {
    path: 'users-management',
    component: UsersManagementComponent,
  },
  {
    path: 'edit/:id',
    component: EditUserManagementComponent,
  },
  {
    path: 'manage-documents',
    component: ManageDocumentsComponent,
  },
  { path: 'share', component: ShareManageDocumentComponent },
  {
    path: 'logout',
    component: LogoutComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  WelcomeComponent,
  LoginComponent,
  LoginSuccessfulComponent,
  RegisterComponent,
  RegisterSuccessfulComponent,
  GroupChatComponent,
  UsersManagementComponent,
  EditUserManagementComponent,
  ManageDocumentsComponent,
  ShareManageDocumentComponent,
  LogoutComponent,
];
