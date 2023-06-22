import { Component } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent {
  constructor(public stepperService: StepperService) {}

  next() {
    this.stepperService.next(5);
  }
}
