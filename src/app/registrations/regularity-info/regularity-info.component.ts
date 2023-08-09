import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-regularity-info',
  templateUrl: './regularity-info.component.html',
  styleUrls: ['./regularity-info.component.scss']
})
export class RegularityInfoComponent implements OnInit {
  constructor(
    private stepperService : StepperService,
    public fb : FormBuilder
    ){}
  ngOnInit() {
  }
  next()
  {
    this.stepperService.next(16);
  }
  back()
  {
    this.stepperService.next(1);
  }
}
