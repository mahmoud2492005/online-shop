import { Detailes } from './interface/detailes.interface';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DetailesService } from './services/detailes.service';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
  import { DatePipe, NgClass } from '@angular/common';
import { CartService } from '../cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { FlashSaleComponent } from "../home/component/flash-sale/flash-sale.component";
import { SimilarProductsComponent } from "../../shared/components/similar-products/similar-products.component";


@Component({
  selector: 'app-details',
  imports: [CarouselModule, DatePipe, RouterLink, NgClass, SimilarProductsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',

})
export class DetailsComponent implements OnInit {
  private readonly activatedRoute =inject(ActivatedRoute)
  private readonly detailesService =inject(DetailesService)
    private readonly cartService = inject(CartService)
        private readonly toastrService = inject(ToastrService)
    
  size:string='Medium'
  color:string='Blue'
i:number=0
increase() {
  this.i++;
}

decrease() {
  if (this.i > 0) this.i--;
}
  addProudctCartItem(id:string):void{

    // this.cartService.addProudctCartHeart(id)
    this.cartService.addProudctCartHeart(id)
    this.cartService.addProudctCart(id).subscribe({
next:(res)=>{
// console.log(res)
  this.cartService.countNumber.next(res.numOfCartItems)
if(res.status==='success'){
  this.toastrService.success(res.message)



}
},
error:(err)=>{
console.log(err)
}
    })
  }



  id: string |null = null;
  detailesData:Detailes={} as Detailes
      sliderDetailes: OwlOptions = {
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
  '<div class="  w-6 h-6 rounded-full  "  ><img class=" w-[52px] h-6 rounded-full bg-[#F6F6F6] opacity-100 border  border-[#FCFCFD]" src="/img/left.svg" alt="beforeimg"></div>',
  '<div class="w-6 h-6 rounded-full  "  ><img class=" w-[52px] h-6 rounded-full bg-[#F6F6F6] opacity-100 border border-[#FCFCFD] " src="/img/right.svg" alt="after Img"></div>',
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
      //   items: 8
      // }
    },
    items:1,
    nav: true
  }


ngOnInit(): void {
  this.getIdUrl();
  this.getDetailesDyId();
}

  getIdUrl():void{
    this.activatedRoute.paramMap.subscribe({
      next:(urlParms)=>{
        this.id=urlParms.get("id")
        // console.log(urlParms.get("id"))

      }
    })
  }
    getDetailesDyId():void{
    this.detailesService.getDetailes(this.id).subscribe({
      next:(res)=>{
        console.log(res.data)
        this.detailesData=res.data

      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
solidHeart:boolean=false
checkSolidHeart(id:string):boolean{
return this.cartService.addproductsHeart.has(id)
}
toggleHeart(id: string): void {
  if (this.cartService.addproductsHeart.has(id)) {
    this.cartService.addproductsHeart.delete(id); // يقفله
  } else {
    this.cartService.addproductsHeart.add(id); // يفتحه
  }
}
}
