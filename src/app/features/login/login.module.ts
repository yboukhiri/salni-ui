import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationModalComponent } from './pages/login-page/registration-modal/registration-modal.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  exports: [LoginPageComponent],
  declarations: [LoginPageComponent, RegistrationModalComponent],
  providers: [],
})
export class LoginModule {}
