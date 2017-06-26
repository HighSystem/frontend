import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HighSystem';
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


menu(){
  alert("hola");
}

}

