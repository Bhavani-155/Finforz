import { Component, OnInit } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';
@Component({
  selector: 'app-sucess-msg',
  templateUrl: './sucess-msg.component.html',
})
export class SucessMsgcomponent implements OnInit {
  ngOnInit() {}
  constructor(public stepperService: StepperService) {}

  next() {
    this.stepperService.next(4);
  }
}
