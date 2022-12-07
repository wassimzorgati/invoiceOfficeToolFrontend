import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from "./alert/alert.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from "@app/register/register.component";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from './navigation/navigation.component';
import {ApiModule} from "@app/services/api.module";

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
