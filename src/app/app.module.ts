import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

/*
************************************************
*    Material modules for app
*************************************************
*/
import { MyMaterialModule } from './app.material';
/*
************************************************
*     principal component
*************************************************
*/
import { AppComponent } from './app.component';
/*
************************************************
*     modules of  your app
*************************************************
*/
import {  WelcomeModule } from "./welcome/welcome.module";
/*
************************************************
*     services of  your app
*************************************************
*/

/*
************************************************
*     models of  your app
*************************************************
*/

/*
************************************************
*     constant of  your app
*************************************************
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    WelcomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
