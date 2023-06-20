import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './modules/auth/containers/registration/signup-details/signup.component';
import { OtpEmailComponent } from './modules/auth/containers/registration/signup-details/otp-verification/otp-email.component';
import { SignupPopupComponent } from './modules/auth/containers/registration/signup-popup/signup-popup.component';
import { SingpassLoginComponent } from './modules/auth/containers/registration/signup-details/document-verification/singpass/singpass-login.component';
import { BiometricComponent } from './modules/auth/containers/biometric/biometric.component';
const routes: Routes = [
  { path: '', component:  SignupPopupComponent},
  { path: 'popup', component: SignupPopupComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'email-verify', component: OtpEmailComponent },
  { path: 'signpass-step1', component: SingpassLoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
