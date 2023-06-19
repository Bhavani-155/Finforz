import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './modules/auth/containers/registration/signup-details/signup.component';
import { OtpEmailComponent } from './modules/auth/containers/registration/signup-details/email-verification/otp-email/otp-email.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SignupPopupComponent } from './modules/auth/containers/registration/signup-popup/signup-popup.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RegistrationComponent } from './modules/auth/containers/registration/signup-details/basic-details/registration.component';
import { basicInfoComponent } from './modules/auth/containers/registration/signup-details/email-verification/otp-email/basic-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    OtpEmailComponent,
    SignupPopupComponent,
    RegistrationComponent,
    basicInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // other imports
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
