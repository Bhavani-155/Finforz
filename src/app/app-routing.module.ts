import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  // path: '',
  //   loadChildren: () => import('./registration/signup-details/basic-details/registration-routing.module').then(m => m.RegisterRoutingModule)
  // },
  {
    path: '',
      loadChildren: () => import('./registrations/registration-routing.module').then(m => m.RegistrationRoutingModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
