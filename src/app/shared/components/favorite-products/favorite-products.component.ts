import { Component, inject, Input, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Product } from '../../../core/models/product.interface';
import { ProudctsService } from '../../../core/services/proudcts.service';
import { CardComponent } from "../card/card.component";
import { CartService } from '../../../features/cart/services/cart.service';
import { Router } from 'express';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-favorite-products',
  imports: [CardComponent, RouterLink],
  templateUrl: './favorite-products.component.html',
  styleUrl: './favorite-products.component.css',
})
export class FavoriteProductsComponent implements OnInit {
      private readonly cartService = inject(CartService)
  // private readonly router = inject(Router)

  
      @Input({required:true}) title!:string;
    @Input({required:true}) text!:string;
    @Input({required:true}) sliceNum!:number;
  showFilters = false;
  pageSize!:number
  // sliceNum:number=4

  p!:number
  total!:number
  filterBy:string='Full Outfit'
    loadMore() {
this.sliceNum=this.sliceNum+4

}
      private readonly ProudctsService =inject(ProudctsService);
  proudctList:Product[]=[]
  ngOnInit(): void {
    this.getAllProudctsData()
  }
  getAllProudctsData(pageNumber:number=1):void{

    this.ProudctsService.getAllProducts(pageNumber).subscribe({
      next:(res)=>{
                this.proudctList = res.data
        //   .filter((item: Product) => item.priceAfterDiscount);      
        // this.pageSize=res.metadata.limit;
        // this.p=res.metadata.currentPage;
        // this.total=res.results

      },
      error:(err)=>{

        console.log(err)
      },
    });
} 
checkSolidHeart(id:string):boolean{
return this.cartService.addproductsHeart.has(id)
}
// addfav():void{
//   this.router.navigate(['/products']);

// }


}
