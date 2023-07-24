import { Component } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-regularity-info',
  templateUrl: './regularity-info.component.html',
  styleUrls: ['./regularity-info.component.scss']
})
export class RegularityInfoComponent {
  constructor(private stepperService : StepperService){}
  next()
  {
    this.stepperService.next(11);
  }
  back()
  {
    this.stepperService.next(10);
  }
}
