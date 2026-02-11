import { Component, inject, OnInit } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { Categories } from '../../../../core/models/categorey/categories.interface';
import { CategoriesService } from '../../../../core/services/categories/categories.service';

@Component({
  selector: 'app-slider1',
  imports: [CarouselModule],
  templateUrl: './slider1.component.html',
  styleUrl: './slider1.component.css',
})
export class Slider1Component implements OnInit {
   private readonly categoriesService =inject(CategoriesService)
  categoriesList:Categories[]=[]

    slider1Option: OwlOptions = {
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
  '<div class="  w-10 h-10 rounded-full  "  ><img class=" w-[52px] h-10 rounded-full bg-[#F6F6F6] opacity-100 border  border-[#8B5E35]" src="/img/left.svg" alt="beforeimg"></div>',
  '<div class="w-10 h-10 rounded-full  "  ><img class=" w-[52px] h-10 rounded-full bg-[#F6F6F6] opacity-100 border border-[#8B5E35] " src="/img/right.svg" alt="after Img"></div>',
  // '<div ><img src="/img/right.svg" alt="after Img"></div>',

],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
  ngOnInit(): void {
    this.getAllCategoriesData()
  }
  

  getAllCategoriesData():void{
    this.categoriesService.getAllCategories().subscribe({
      next:(res)=>{
        // console.log(res)
        this.categoriesList=res.data

      },
      error:(err)=>{
console.log(err)
      }
    })
  }


}
