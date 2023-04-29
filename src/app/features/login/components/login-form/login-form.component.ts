import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  title = 'Salni UI';

  constructor(
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    console.log(this.loginForm.value);
    // check if form is valid
    // if not, return
    console.log(this.loginForm.valid);
    if (!this.loginForm.valid) {
      if (this.loginForm.get('email')?.hasError('required')) {
        this.snackbarService.error('Email is required');
      } else if (this.loginForm.get('email')?.hasError('email')) {
        this.snackbarService.error('Email is invalid');
      } else if (this.loginForm.get('password')?.hasError('required')) {
        this.snackbarService.error('Password is required');
      }
      return;
    }
    if (!this.authenticationService.authenticate(this.loginForm.value)) {
      this.snackbarService.error('Invalid credentials');
    }
  }
}
