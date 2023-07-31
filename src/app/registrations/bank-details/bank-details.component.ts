import { Component } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent {
  constructor(
    private stepperService: StepperService,
  ){

  }

  next() {
    this.stepperService.next(4);
  }
}
