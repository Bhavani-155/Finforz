import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  currentStep: number = 1;
  subTitle: string = 'Basic Info';
  barWidth: number = 10;

  next(currentStep: any) {
    this.currentStep = currentStep;
    this.barWidth = this.currentStep * 10; // Assuming each step is 10% progress
    if (this.currentStep === 2) {
      this.subTitle = 'Verification';
    }
  }
}
