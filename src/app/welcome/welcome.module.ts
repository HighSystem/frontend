import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { SwiperModule } from 'angular2-useful-swiper';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavToolbarComponent } from '../navigation/nav-toolbar/nav-toolbar.component';


@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    SwiperModule
  ],
  declarations: [IndexComponent, AboutComponent, PortfolioComponent, ContactComponent, CarouselComponent, NavToolbarComponent],
  exports:[IndexComponent]
})
export class WelcomeModule { }
