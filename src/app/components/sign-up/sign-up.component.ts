import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private authService: AuthService) {}

  signUpForm: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'blur',
    }),
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
    //TODO: add validation to confirm passwords match
    repeatPassword: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
  });

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }
  ngOnInit(): void {}

  onSubmit() {
    this.authService.signUp(
      this.signUpForm.value.email,
      this.signUpForm.value.password,
      this.signUpForm.value.name
    );
  }
  checkAuth() {
    this.authService.checkAuth();
  }
}
