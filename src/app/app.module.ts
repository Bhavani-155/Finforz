import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './modules/auth/containers/registration/signup-details/signup.component';
import { OtpEmailComponent } from './modules/auth/containers/registration/signup-details/otp-verification/otp-email.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SignupPopupComponent } from './modules/auth/containers/registration/signup-popup/signup-popup.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { basicInfoComponent } from './modules/auth/containers/registration/signup-details/otp-verification/basic-info.component';
import { ManualDocumentUploadComponent } from './modules/auth/containers/registration/signup-details/document-verification/manual-document-upload/manual-document-upload.component';
import { SingpassComponent } from './modules/auth/containers/registration/signup-details/document-verification/singpass/singpass.component';
import { RegistrationComponent } from './modules/auth/containers/registration/signup-details/basic-details/registration.component';
import { SingpassLoginComponent } from './modules/auth/containers/registration/signup-details/document-verification/singpass/singpass-login.component';
import { IonicModule } from '@ionic/angular';
import { BiometricComponent } from './modules/auth/containers/biometric/biometric.component';
import { DocumentHomeComponent } from './modules/auth/containers/registration/signup-details/document-verification/document-home/document-home.component';
import { SingpassModelComponent } from './modules/auth/containers/registration/signup-details/document-verification/singpass-model/singpass-model.component';
import { FormsModule } from '@angular/forms';
import { UserMenuComponent } from './modules/user/user-menu/user-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    OtpEmailComponent,
    SignupPopupComponent,
    RegistrationComponent,
    basicInfoComponent,
    ManualDocumentUploadComponent,
    SingpassComponent,
    SingpassLoginComponent,
    BiometricComponent,
    SingpassLoginComponent,
    DocumentHomeComponent,
    SingpassModelComponent,
    UserMenuComponent,
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
    IonicModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
