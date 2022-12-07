import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IntroComponent} from "./intro/intro.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AuthGuardServiceService} from "./auth/auth-guard-service.service";
import {RegisterComponent} from "@app/register/register.component";

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'intro',
    component: IntroComponent,
    canActivate: [AuthGuardServiceService]
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
