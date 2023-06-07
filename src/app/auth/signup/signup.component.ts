import { Component } from '@angular/core';
import { StepperService } from 'src/app/service/stepper.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(public stepperService: StepperService) {}

  // next(): void {
  //   this.stepperService.next();
  // }
}
