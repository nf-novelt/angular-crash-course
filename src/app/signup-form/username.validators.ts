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
}