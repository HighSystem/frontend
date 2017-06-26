import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {NgFor} from '@angular/common';

export enum Direction {UNKNOWN, NEXT, PREV}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images=["https://goo.gl/wQPJhS", "https://goo.gl/p72N6A","https://goo.gl/Fg5kwP",
  "https://goo.gl/LAkUo9"
  ];

  config: Object = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            zoom: true,
             loop: true,
            freeMode: true,
            autoplay: 2500,
            spaceBetween: 30,
            effect: 'coverflow',
            // Disable preloading of all images
            preloadImages: false,
            // Enable lazy loading
            lazyLoading: true,
           keyboardControl: true,
          // mousewheelControl: true,
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflow: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows : true
          }
  };




  constructor() { }

  ngOnInit() {
  }

}
