import { Component } from '@angular/core';
import { StepperService } from 'src/app/modules/auth/services/stepper.service';

@Component({
  selector: 'app-document-home',
  templateUrl: './document-home.component.html',
  styleUrls: ['./document-home.component.scss']
})
export class DocumentHomeComponent {

  constructor(public stepperService : StepperService){}

  next() {
    this.stepperService.next(5);
  }
}
