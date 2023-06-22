import { FormControl, Validators } from "@angular/forms";

export class ValidationHelper  extends Validators
{

    static onlySpaceValidator(control: FormControl): { [key: string]: any } {
        var len = control?.value?.length;
        // console.log( { len } );
        if (len && control.value.trim() == "") {
            return { invalidOnlySpace: true, name: "error" };
        }
    
        return {};
      }
}