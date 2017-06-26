import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { SwiperModule } from 'angular2-useful-swiper';

/*
************************************************
*     modules of  your app
*************************************************
*/
import { NavigationModule } from '../navigation/navigation.module';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    SwiperModule,
    NavigationModule
  ],
  declarations: [IndexComponent, AboutComponent, PortfolioComponent, ContactComponent, CarouselComponent],
  exports:[IndexComponent]
})
export class WelcomeModule { }
