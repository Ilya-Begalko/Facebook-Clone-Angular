import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './shared/material.module';
import { HomeModule } from './components/home/home.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
