import { Component } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
 
})
export class PasswordComponent {
  constructor(
    private stepperService: StepperService,
  ){

  }

  next() {
    this.stepperService.next(4);
  }
}
