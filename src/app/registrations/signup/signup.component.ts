
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StepperService } from 'src/app/services/stepper.service';
import { ValidationHelper } from 'src/app/shared/util/validationhelper';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { ApiServices } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(
    private router: Router,
    public stepperService: StepperService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private apiServices: ApiServices,
   
  ) {
    
  }

  registerForm: FormGroup;

  createRegistartionFormGroup() {
    this.registerForm = this.fb.group({
      nric: [
        '',
        [ValidationHelper.onlySpaceValidator, ValidationHelper.required],
      ],
    });
  }

  ngOnInit() {
    this.createRegistartionFormGroup();
    this.route.queryParams.subscribe((params) => {
      if (params['singpass']) {
        this.stepperService.next(7);
      }
    });
  }

  next(): void {
    this.stepperService.next(2);
  }
}