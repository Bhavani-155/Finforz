import { Component } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent {
  constructor(private stepperService : StepperService){}
  next()
  {
    this.stepperService.next(13);
  }
  back()
  {
    this.stepperService.next(11);
  }
}
