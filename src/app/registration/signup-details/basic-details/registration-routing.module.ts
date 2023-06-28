import { RouterModule, Routes } from '@angular/router';
import { SignupPopupComponent } from '../../signup-popup/signup-popup.component';
import { SignupComponent } from '../signup.component';
import { NgModule } from '@angular/core';
import { SingpassModelComponent } from '../document-verification/singpass-model/singpass-model.component';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
const routes: Routes = [
  { path: '', component: SignupPopupComponent },
  { path: 'popup', component: SignupPopupComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'singpass', component: SingpassModelComponent },
  { path: 'callback', component: PersonalInformationComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
