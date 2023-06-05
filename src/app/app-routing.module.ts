import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { OtpEmailComponent } from './auth/email-verification/otp-email/otp-email.component';
const routes: Routes = [
  { path: 'signUp', component: SignupComponent },
  { path: 'email-verify', component: OtpEmailComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
