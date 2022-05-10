import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent} from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { RegisterComponent } from './register/register.component';
import { ManageDocumentsComponent } from './manage-documents/manage-documents.component';
import { LoginComponent } from './login/login.component';
import { LoginSuccessfulComponent } from './login-successful/login-successful.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterSuccessfulComponent } from './register-successful/register-successful.component';
import { LogoutComponent } from './logout/logout.component';
import { EditUserManagementComponent } from './edit-user-management/edit-user-management.component';
import { ShareManageDocumentComponent } from './share-manage-document/share-manage-document.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UsersManagementComponent,
    RegisterComponent,
    ManageDocumentsComponent,
    LoginComponent,
    LoginSuccessfulComponent,
    GroupChatComponent,
    RegisterSuccessfulComponent,
    LogoutComponent,
    EditUserManagementComponent,
    ShareManageDocumentComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
