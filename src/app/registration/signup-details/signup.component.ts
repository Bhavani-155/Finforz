import { Component } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(public stepperService: StepperService) {}

  onSwipeLeft(event){
console.log("swipe Left")

this.stepperService.next(this.stepperService.currentStep-1);
  }

  onSwipeRight(event){
    console.log("swipe right")

    this.stepperService.next(this.stepperService.currentStep+1);
      }
  // next(): void {
  //   this.stepperService.next();
  // }
}
