import { Component, OnInit } from '@angular/core';
import { StepperService } from 'src/app/modules/auth/services/stepper.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
})
export class basicInfoComponent implements OnInit {
  ngOnInit() {}
  constructor(public stepperService: StepperService) {}

  next() {
    this.stepperService.next(4);
  }
}
