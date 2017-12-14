import { PasswordValidators } from './password.validator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      oldPassword: new FormControl('', Validators.required, PasswordValidators.invalid),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    },
    PasswordValidators.passwordsDontMatch);
  }

  changePassword() {
    console.log(this.form.value);
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  ngOnInit() {
  }

}
