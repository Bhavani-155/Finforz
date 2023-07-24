import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { DocumentHomeComponent } from './document-home/document-home.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { BiometricVerificationComponent } from './biometric-verification/biometric-verification.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { InvestmentKnowledgeComponent } from './investment-knowledge/investment-knowledge.component';
import { RegularityInfoComponent } from './regularity-info/regularity-info.component';
import { SignatureComponent } from './signature/signature.component';
import { SharedModule } from '../shared/shared-component/shared.module';
// import { ModalContentComponent } from './signup-popup/modal-content.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    SignupComponent,
    OtpVerificationComponent,
    DocumentHomeComponent,
    BiometricVerificationComponent,
    PersonalInformationComponent,
    ContactInformationComponent,
    InvestmentKnowledgeComponent,
    RegularityInfoComponent,
    SignatureComponent,
  ],
  exports: [RegistrationRoutingModule,RegistrationComponent,SignupComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class RegistrationModule { }