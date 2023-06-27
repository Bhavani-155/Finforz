import { Component } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-permanent-address',
  templateUrl: './permanent-address.component.html',
  styleUrls: ['./permanent-address.component.scss']
})
export class PermanentAddressComponent {
  constructor(private stepperService : StepperService){}
  next()
  {
    this.stepperService.next(9);
  }
}
