import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  currentStep: number = 1;
  subTitle: string = 'Basic Info';
  barWidth: number = 10;
  title: string = 'Account Information';

  next(currentStep: any) {
    this.currentStep = currentStep;
    this.barWidth = this.currentStep * 10; // Assuming each step is 10% progress
    if (this.currentStep === 2) {
      this.subTitle = 'Verification';
    }else if(this.currentStep === 5) 
    {
      this.title = 'Log in with Singpass';
      this.subTitle = 'Your Trusted Digital Identity';
    }else {
      this.subTitle = 'Basic Info';
    }
  }
}
