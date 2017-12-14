import { UsernameValidators } from './username.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ],
      UsernameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    })
  });

  login() {
    //the server would return a boolean via an authentication service
    //let isValid = this.authService.login(this.form.value);
    let isValid = false;
    if(!isValid) {
      //set the error at the form level, because we don't know which field (username or password)
      this.form.setErrors ({
        invalidLogin: true
      });
    }
  }

  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }
}
