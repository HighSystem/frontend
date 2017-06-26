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
            spaceBetween: 30
  };


  constructor() { }

  ngOnInit() {
  }

}
