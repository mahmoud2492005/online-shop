import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../../../core/services/categories/categories.service';
import { Categories } from '../../../../core/models/categorey/categories.interface';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-slider2',
  imports: [CarouselModule],
  templateUrl: './slider2.component.html',
  styleUrl: './slider2.component.css',
})
export class Slider2Component  {
      slide2Options: OwlOptions = {
      autoplay:true,
      // autoplayTimeout:3400,
      autoplayHoverPause:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    // navText: ['', ''],
            navText: [
  '<div class="  w-10 h-10 rounded-full  "  ><img class=" w-[52px] h-10 rounded-full bg-[#F6F6F6] opacity-100 border  border-[#8B5E35]" src="/img/left.svg" alt="beforeimg"></div>',
  '<div class="w-10 h-10 rounded-full  "  ><img class=" w-[52px] h-10 rounded-full bg-[#F6F6F6] opacity-100 border border-[#8B5E35] " src="/img/right.svg" alt="after Img"></div>',
  // '<div ><img src="/img/right.svg" alt="after Img"></div>',

],
    responsive: {
      // 0: {
      //   items: 2
      // },
      // 400: {
      //   items: 4
      // },
      // 740: {
      //   items: 6
      // },
      // 940: {
      //   items: 1
      // }
    },
      items: 1,

    nav: true 
  }


}
