import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './modules/auth/containers/registration/signup-details/signup.component';
import { OtpEmailComponent } from './modules/auth/containers/registration/signup-details/email-verification/otp-email/otp-email.component';
import { SignupPopupComponent } from './modules/auth/containers/registration/signup-popup/signup-popup.component';
const routes: Routes = [
  { path: 'popup', component: SignupPopupComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'email-verify', component: OtpEmailComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
