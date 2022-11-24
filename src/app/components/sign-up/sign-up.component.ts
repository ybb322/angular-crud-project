import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
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
  });

  constructor(private authService: AuthService) {}

  get name(): AbstractControl | null {
    return this.signUpForm.get('name');
  }

  get email(): AbstractControl | null {
    return this.signUpForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.signUpForm.get('password');
  }

  onSubmit(event: any): void {
    if (event.shiftKey) {
      return;
    }
    this.authService.signUp(
      this.signUpForm.value.email,
      this.signUpForm.value.password,
      this.signUpForm.value.name
    );
  }
}
