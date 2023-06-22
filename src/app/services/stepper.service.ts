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
      this.title = 'Account Information';
      this.subTitle = 'Verification';
    }else if(this.currentStep === 3)
    {
      this.title = 'Account Information';
      this.subTitle = 'Verified';
    }else if(this.currentStep === 4)
    {
      this.title = 'Account Information';
      this.subTitle = 'Document';
    }else if(this.currentStep === 5) 
    {
      this.title = 'Log in with Singpass';
      this.subTitle = 'Your Trusted Digital Identity';
    }else if(this.currentStep === 6) 
    {
      this.title = 'Manual Document';
      this.subTitle = 'Verification';
    }else if(this.currentStep === 6) 
    {
      this.title = 'Account opening';
      this.subTitle = 'Personal Information';
    }
    else {
      this.title = 'Account Information';
      this.subTitle = 'Basic Info';
    }
  }
}
