import { Component } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-investment-knowledge',
  templateUrl: './investment-knowledge.component.html',
  styleUrls: ['./investment-knowledge.component.scss']
})
export class InvestmentKnowledgeComponent {

  constructor(private stepperService : StepperService){}
  next()
  {
    this.stepperService.next(12);
  }
  back()
  {
    this.stepperService.next(9);
  }
}
