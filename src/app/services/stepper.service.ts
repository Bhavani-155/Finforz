import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  currentStep: number = 1;
  subTitle: string = 'Basic Info';
  barWidth: number = 10;
  title: string = 'Account Opening';

  next(currentStep: any) {
    this.currentStep = currentStep;
    this.barWidth = this.currentStep * 10; // Assuming each step is 10% progress
    if (this.currentStep === 2) {
      this.title = 'Account Opening';
      this.subTitle = 'Verification';
    }else if(this.currentStep === 3)
    {
      this.title = 'Account Opening';
      this.subTitle = 'Account Registration';
    }else if(this.currentStep === 4)
    {
      this.title = 'Account Opening';
      this.subTitle = 'Basic Info';
    }else if(this.currentStep === 5) 
    {
      this.title = 'Account Opening';
      this.subTitle = 'Choose Account Opening Method';
    }else if(this.currentStep === 6) 
    {
      this.title = 'Account Opening';
      this.subTitle = 'Upload Documents';
    }else if(this.currentStep === 7) 
    {
      this.title = 'Account Opening';
      this.subTitle = 'Upload Documents';
    }else if(this.currentStep ===8) 
    {
      this.title = 'Account Opening';
      this.subTitle = 'Personal Information';
    }else if(this.currentStep === 9) 
    {
      this.title = 'Account Opening';
      this.subTitle = 'Permanent Address & Mailing Address';
    }
    else if(this.currentStep === 10) 
     {
      this.title = 'Account Opening';
      this.subTitle = 'Financial Information & Assessment';
    }
    else if(this.currentStep === 11) 
    {
     this.title = 'Account Opening';
     this.subTitle = 'Investment Knowledge';
   }
   else if(this.currentStep === 12) 
    {
     this.title = 'Account Opening';
     this.subTitle = 'Customer Account Review';
   }
   else if(this.currentStep === 13) 
    {
     this.title = 'Account Opening';
     this.subTitle = 'Declaration';
   }
   else if(this.currentStep === 14) 
    {
     this.title = 'Account Opening';
     this.subTitle = 'Bank Details';
   }
   else if(this.currentStep === 15) 
    {
     this.title = 'Account Opening';
     this.subTitle = 'Regularity Information';
   }
   else if(this.currentStep === 16) 
    {
     this.title = 'Account Opening';
     this.subTitle = 'Add Signature';
   }
  }
}
