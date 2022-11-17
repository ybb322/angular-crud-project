import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor() {}

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

  onSubmit() {}

  signUp() {
    console.log(this.signUpForm);

    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      this.signUpForm.value.email,
      this.signUpForm.value.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ..
      });
  }
}
