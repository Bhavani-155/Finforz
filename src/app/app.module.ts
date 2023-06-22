import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './registration/signup-details/signup.component';
import { OtpEmailComponent } from './registration/signup-details/otp-verification/otp-email.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SignupPopupComponent } from './registration/signup-popup/signup-popup.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { basicInfoComponent } from './registration/signup-details/otp-verification/basic-info.component';
import { ManualDocumentUploadComponent } from './registration/signup-details/document-verification/manual-document-upload/manual-document-upload.component';
import { SingpassComponent } from './registration/signup-details/document-verification/singpass/singpass.component';
import { RegistrationComponent } from './registration/signup-details/basic-details/registration.component';
import { SingpassLoginComponent } from './registration/signup-details/document-verification/singpass/singpass-login.component';
import { IonicModule } from '@ionic/angular';
import { DocumentHomeComponent } from './registration/signup-details/document-verification/document-home/document-home.component';
import { SingpassModelComponent } from './registration/signup-details/document-verification/singpass-model/singpass-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { SwipeModule } from './registration/swipe/swipe.module';
import { PersonalInformationComponent } from './registration/signup-details/personal-information/personal-information.component';

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
    SingpassLoginComponent,
    DocumentHomeComponent,
    SingpassModelComponent,
    MenuComponent,
    PersonalInformationComponent,
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
    IonicStorageModule.forRoot(),
    FormsModule,
    SwipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
