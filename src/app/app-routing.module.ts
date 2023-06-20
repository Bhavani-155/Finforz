import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './modules/auth/containers/registration/signup-details/signup.component';
import { OtpEmailComponent } from './modules/auth/containers/registration/signup-details/otp-verification/otp-email.component';
import { SignupPopupComponent } from './modules/auth/containers/registration/signup-popup/signup-popup.component';
import { basicInfoComponent } from './modules/auth/containers/registration/signup-details/otp-verification/basic-info.component';
import { DocumentHomeComponent } from './modules/auth/containers/registration/signup-details/document-verification/document-home/document-home.component';
const routes: Routes = [
  { path: '', component: SignupPopupComponent },
  { path: 'popup', component: SignupPopupComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'email-verify', component: OtpEmailComponent },
  { path: 'verified', component: basicInfoComponent },
  { path: 'documents', component: DocumentHomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
