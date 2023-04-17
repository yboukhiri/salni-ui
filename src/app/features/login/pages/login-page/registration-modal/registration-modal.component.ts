import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateUserDto } from './dto/create-user.dto';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss'],
})
export class RegistrationModalComponent {
  registrationForm: FormGroup;
  user: CreateUserDto = new CreateUserDto();
  @Output() register = new EventEmitter<CreateUserDto>();
  @Output() cancel = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(255),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(255),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(255),
        ],
      ],
      birthDay: [
        '',
        [Validators.required, Validators.min(1), Validators.max(31)],
      ],
      birthMonth: [
        '',
        [Validators.required, Validators.min(1), Validators.max(12)],
      ],
      birthYear: [
        '',
        [Validators.required, Validators.min(1900), Validators.max(2023)],
      ],
      gender: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const {
      firstName,
      lastName,
      email,
      password,
      birthDay,
      birthMonth,
      birthYear,
      gender,
    } = this.registrationForm.value;
    const createUserDto: CreateUserDto = {
      firstName,
      lastName,
      email,
      password,
      birthDay,
      birthMonth,
      birthYear,
      gender,
    };
    this.register.emit(createUserDto);
  }

  onCancel() {
    this.cancel.emit();
  }
}
