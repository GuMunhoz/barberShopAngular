import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  loginTemplate: boolean = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [Validators.required]);
  userFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.loginTemplate = !this.loginTemplate;
  }
  get fieldInvalidLogin(): boolean {
    return (
      this.emailFormControl.hasError('required') ||
      this.emailFormControl.hasError('email') ||
      this.passwordFormControl.hasError('required')
    );
  }

  get fieldInvalidSignUp(): boolean {
    return (
      this.emailFormControl.hasError('required') ||
      this.emailFormControl.hasError('email') ||
      this.passwordFormControl.hasError('required') ||
      this.userFormControl.hasError('required')
    );
  }
}
