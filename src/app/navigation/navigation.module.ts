import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { NavigationRoutingModule } from './navigation-routing.module';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';




@NgModule({
  imports: [
    CommonModule,
    NavigationRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [NavToolbarComponent, NavFooterComponent]
})
export class NavigationModule { }
