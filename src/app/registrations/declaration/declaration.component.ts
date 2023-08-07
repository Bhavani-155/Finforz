import { Component } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent {
  constructor(private stepperService : StepperService){}
  next()
  {
    this.stepperService.next(14);
  }
  back()
  {
    this.stepperService.next(9);
  }
}
