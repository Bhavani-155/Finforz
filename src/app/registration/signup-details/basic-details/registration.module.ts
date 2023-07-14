import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterRoutingModule } from "./registration-routing.module";
import { RegularityInfoComponent } from './regularity-info/regularity-info.component';
import { SignatureComponent } from './signature/signature.component';


@NgModule({
    imports: [RegisterRoutingModule],
    exports: [RouterModule,RegularityInfoComponent,SignatureComponent],
    declarations: [
      RegularityInfoComponent,
      SignatureComponent,
    ]
  })
export class RegisterModule {}