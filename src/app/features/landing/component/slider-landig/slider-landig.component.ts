import { Component } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider-landig',
  imports: [CarouselModule],
  templateUrl: './slider-landig.component.html',
  styleUrl: './slider-landig.component.css',
})
export class SliderLandigComponent {
        slidelanding: OwlOptions = {
      autoplay:true,
      // autoplayTimeout:3400,
      autoplayHoverPause:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    // navText: ['', ''],
    navText: [
  '<div ><img  src="/img/left.svg" alt="after Img"></div>',
  '<div ><img src="/img/right.svg" alt="after Img"></div>',

],


    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      // 940: {
      //   items: 4
      // }
    },
      // items: 1,

    nav: true
  }


}
