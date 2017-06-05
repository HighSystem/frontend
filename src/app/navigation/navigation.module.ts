import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationRoutingModule
  ],
  declarations: [NavToolbarComponent, NavFooterComponent]
})
export class NavigationModule { }
