import { Component } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-customer-account-review',
  templateUrl: './customer-account-review.component.html',
  styleUrls: ['./customer-account-review.component.scss']
})
export class CustomerAccountReviewComponent {
  constructor(private stepperService : StepperService){}
  next()
  {
    this.stepperService.next(12);
  }
}
