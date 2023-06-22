import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StepperService } from 'src/app/services/stepper.service';
import { ValidationHelper } from 'src/app/shared/utils/validationhelper';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  constructor(public stepperService: StepperService, private fb: FormBuilder,) {}

  registerForm: FormGroup;

  createRegistartionFormGroup(){
    this.registerForm = this.fb.group({
      nric: ['', [ValidationHelper.onlySpaceValidator,ValidationHelper.required]],
    });
  }

  ngOnInit(){
    this.createRegistartionFormGroup();
  }
 


  next(): void {
    this.stepperService.next(2);
  }
}
