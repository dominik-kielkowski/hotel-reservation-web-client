import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {UserService} from "../../../core/services/user.service";

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class RegisterComponent {
  @Output() closeDialog = new EventEmitter<void>();
  registerForm: FormGroup;

  // Define the input fields' metadata
  formControls = [
    { name: 'displayName', label: 'Display Name', type: 'text', placeholder: 'Enter your display name', maxLength: 100 },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password', minLength: 6 }
  ];

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = this.fb.group({
      displayName: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onClose() {
    this.closeDialog.emit();
  }

  submitRegistration() {
    if (this.registerForm.valid) {
      const registerData: RegisterDto = this.registerForm.value;

      this.userService.register(registerData).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          this.onClose(); // Close the dialog on success
        },
        error: (error) => {
          console.error('Registration error:', error);
        }
      });
    } else {
      console.log('Form is not valid');
    }
  }
}

export interface RegisterDto {
  displayName: string;
  email: string;
  password: string;
}
