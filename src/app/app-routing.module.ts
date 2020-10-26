import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './domain/registration/registration.component';
import { LoginComponent } from './domain/login/login.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
