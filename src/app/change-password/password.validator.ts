import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {

    static invalid (control: AbstractControl): Promise<ValidationErrors| null> {
console.log(control);

        //Use a timer (setTimeout(...)) to simulate an HTTP call delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value !== 'abc') {
                    resolve({ invalid: true });                    
                }
                resolve(null);
            }, 2000); //2secs of delay   
        });             
    }

    static passwordsDontMatch(control: AbstractControl): ValidationErrors| null {
        let newPassword = control.get('newPassword').value;
        let confirmPassword = control.get('confirmPassword').value;

        if(newPassword !== confirmPassword) {
            console.log("no match");
            return {
                passwordsDontMatch: true
            }
        }

        return null;
    }
}