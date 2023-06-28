import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterRoutingModule } from "./registration-routing.module";


@NgModule({
    imports: [RegisterRoutingModule],
    exports: [RouterModule]
  })
export class RegisterModule {}