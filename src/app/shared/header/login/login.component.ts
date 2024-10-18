import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {UserService} from "../../../core/services/user.service";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent {
  @Output() closeDialog = new EventEmitter<void>();
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onClose() {
    this.closeDialog.emit();
  }

  submitLogin() {
    if (this.loginForm.valid) {
      const loginData: LoginDto = this.loginForm.value;
      this.userService.login(loginData).subscribe({
        next: (response) => {
          // Handle successful login and save the token
          console.log('Login successful:', response);
          localStorage.setItem('token', response.token); // Store the token in local storage
          // You can also save other user information as needed
          // Redirect or take additional action after login
          this.onClose(); // Close the dialog after successful login
        },
        error: (err) => {
          console.error('Login failed:', err);
          // Handle login error (show a message, etc.)
        }
      });
    } else {
      console.log('Form is not valid');
    }
  }
}

export interface LoginDto {
  email: string;
  password: string;
}
