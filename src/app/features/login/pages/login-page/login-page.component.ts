import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { RegistrationModalComponent } from './registration-modal/registration-modal.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  showRegistration = false;

  // @ViewChild(RegistrationModalComponent)
  // private registrationModal: RegistrationModalComponent | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    this.authService.authenticate(this.loginForm.value);
  }

  register() {
    // Handle registration logic here
    this.hideRegistrationModal();
  }

  showRegistrationModal() {
    this.showRegistration = true;
  }

  hideRegistrationModal() {
    this.showRegistration = false;
  }
}
