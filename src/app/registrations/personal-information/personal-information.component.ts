import { Component } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { ApiServices } from 'src/app/services/auth.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent {
  constructor(
    private stepperService: StepperService,
    private route: ActivatedRoute,
    private apiServices: ApiServices,
    private utilityService: UtilityService
  ) {}
  authCodeForPersonAPI: any;
  personData: any = [];
  formValues: any = {};
  floatdata:boolean=true;
  alterdata:boolean=true;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['singpass']) {
        this.authCodeForPersonAPI = params['code'];
        this.getPersonDetails(this.authCodeForPersonAPI);
      }
    });
  }
  next() {
    this.stepperService.next(8);
  }
  back() {
    this.stepperService.next(7);
  }

  getPersonDetails(authCode: any) {
    let request = {
      code: authCode,
    };
    this.apiServices.callTokenAPI(request).subscribe(
      (response) => {
        if (response) {
          this.personData = response.text;
          this.populateForm(response.text);
        }
      },
      (error) => {}
    );
  }

  populateForm(data: any) {
    this.formValues.uinfin = this.utilityService.str(data.uinfin);
    this.formValues.name = this.utilityService.str(data.name);
    this.formValues.aliasname = this.utilityService.str(data.aliasname);
    this.formValues.hanyupinyinname = this.utilityService.str(
      data.hanyupinyinname
    );
    this.formValues.hanyupinyinaliasname = this.utilityService.str(
      data.hanyupinyinaliasname
    );
    this.formValues.marriedname = this.utilityService.str(data.marriedname);
    this.formValues.sex = this.utilityService.str(data.sex);
    this.formValues.nationality = this.utilityService.str(data.nationality);
    this.formValues.dob = this.utilityService.str(data.dob);
    this.formValues.email = this.utilityService.str(data.email);
    this.formValues.mobileno =
      this.utilityService.str(data.mobileno.prefix) +
      this.utilityService.str(data.mobileno.areacode) +
      ' ' +
      this.utilityService.str(data.mobileno.nbr);
    this.formValues.marital = this.utilityService.str(data.marital);
  }
}
