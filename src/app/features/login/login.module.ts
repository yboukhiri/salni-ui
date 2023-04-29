import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationModalComponent } from './pages/login-page/registration-modal/registration-modal.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [LoginPageComponent],
  declarations: [
    LoginPageComponent,
    RegistrationModalComponent,
    LoginFormComponent,
  ],
  providers: [],
})
export class LoginModule {}
