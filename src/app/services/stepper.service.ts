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
    switch(currentStep) { 
      case 2: { 
        this.title = 'Account Opening';
        this.subTitle = 'Verification'; 
        break; 
      } 
      case 3: { 
        this.title = 'Account Opening';
        this.subTitle = 'Account Registration';
        break; 
      }
      case 4: { 
        this.title = 'Account Opening';
        this.subTitle = 'Basic Info';
        break; 
      } 
      case 5: { 
        this.title = 'Account Opening';
        this.subTitle = 'Choose Account Opening Method';
        break; 
      }
      case 6: { 
        this.title = 'Account Opening';
        this.subTitle = 'Upload Documents';
        break; 
      } 
      case 7: { 
        this.title = 'Account Opening';
        this.subTitle = 'Upload Documents';
        break; 
      }
      case 8: { 
        this.title = 'Account Opening';
        this.subTitle = 'Personal Information';
        break; 
      } 
      case 9: { 
        this.title = 'Account Opening';
        this.subTitle = 'Permanent Address & Mailing Address';
        break; 
      }
      case 10: { 
        this.title = 'Account Opening';
        this.subTitle = 'Financial Information & Assessment';
        break; 
      } 
      case 11: { 
        this.title = 'Account Opening';
        this.subTitle = 'Investment Knowledge';
        break; 
      }
      case 12: { 
        this.title = 'Account Opening';
        this.subTitle = 'Customer Account Review';
        break; 
      } 
      case 13: { 
        this.title = 'Account Opening';
        this.subTitle = 'Declaration';
        break; 
      }
      case 14: { 
        this.title = 'Account Opening';
        this.subTitle = 'Bank Details';
        break; 
      } 
      case 15: { 
        this.title = 'Account Opening';
        this.subTitle = 'Regularity Information';
        break; 
      }
      case 16: { 
        this.title = 'Account Opening';
        this.subTitle = 'Add Signature';
        break; 
      }
      default: { 
        this.title = 'Account Opening';
        this.subTitle = 'Basic Info';
        break; 
      } 
    }
  }
}
