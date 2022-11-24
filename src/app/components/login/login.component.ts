import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
    }),
    password: new FormControl('', {
      validators: [
        Validators.pattern(/^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/),
        Validators.minLength(6),
      ],
      updateOn: 'blur',
    }),
  });

  constructor(private authService: AuthService) {}

  get email(): AbstractControl<string> | null {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl<string> | null {
    return this.loginForm.get('password');
  }

  onSubmit(event: any): void {
    if (event.shiftKey) {
      return;
    }
    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
  }
}
