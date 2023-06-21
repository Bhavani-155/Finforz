import { RouterModule, Routes } from "@angular/router";
import { SignupPopupComponent } from "../../signup-popup/signup-popup.component";
import { SignupComponent } from "../signup.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', component: SignupPopupComponent },
    { path: 'popup', component: SignupPopupComponent },
    { path: 'signUp', component: SignupComponent },
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class RegisterRoutingModule {}