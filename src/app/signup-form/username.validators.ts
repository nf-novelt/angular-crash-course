import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors| null {
        //if the value contains a space    
        if((control.value as string).indexOf(' ') >= 0) {
            return {
                cannotContainSpace: true
            };
            /* But we could also return this:
            return  {
                required: true
            };
            
            return {
                minLength: {
                    requiredLength: 10,
                    actualLength: control.value.length
                }
            };*/
        }

        return null;
    }

    static shouldBeUnique (control: AbstractControl): Promise<ValidationErrors| null> {
        //Use a timer (setTimeout(...)) to simulate an HTTP call delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'mosh') {
                    resolve({ shouldBeUnique: true });
                    
                }        
                resolve(null);
            }, 2000); //2secs of delay   
        });             
    }
}