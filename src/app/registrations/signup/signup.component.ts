import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepperService } from 'src/app/services/stepper.service';
import { ValidationHelper } from 'src/app/shared/util/validationhelper';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { ApiServices } from 'src/app/services/auth.service';
import { SignupService } from '../services/signup.service';
import { SignupModel } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm: FormGroup;
  signupModel: SignupModel;
  formBuilder: any;
  constructor(
    private router: Router,
    public stepperService: StepperService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private apiServices: ApiServices,
    private signupService: SignupService
  ) {}

  customerId: any = '1234321';
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
    this.getBasicDetails();
    this.createRegistartionFormGroup();
    this.route.queryParams.subscribe((params) => {
      if (params['singpass']) {
        this.stepperService.next(7);
      }
    });
  }

  getBasicDetails() {
    this.signupService
      .getBasicDetails(this.customerId)
      .subscribe((response: any[]) => {});
  }

  next(): void {
    this.stepperService.next(2);
  }
  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.signupModel = this.signupForm.value;
      console.log(this.signupModel);
    } else {
      this.markFormGroupAsTouched(this.signupForm);
    }
  }
  markFormGroupAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupAsTouched(control);
      }
    });
  }
}
