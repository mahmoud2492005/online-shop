import { Cart } from './models/interface/cart.interface';
import { CartService } from './services/cart.service';
import { Component, inject, OnInit } from '@angular/core';
  import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SimilarProductsComponent } from "../../shared/components/similar-products/similar-products.component";


@Component({
  selector: 'app-cart',
  imports: [DatePipe ,CommonModule, RouterLink,  SimilarProductsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartData:Cart={} as Cart
  private readonly cartService = inject(CartService)
ngOnInit(): void {
  this.getLocedCartData();
}

  getLocedCartData():void{
    this.cartService.getLocedProudctCart().subscribe({
      next:(res)=>{
console.log(res.data)
this.cartData=res.data

      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  getDeleteCartData(id:string):void{
    // this.cartService.solidHeart=false
    this.cartService.deleteProudctCartHeart(id)
    this.cartService.deletProudctCart(id).subscribe({
      next:(res)=>{
  this.cartService.countNumber.next(res.numOfCartItems)

console.log(res.data)
// this.getLocedCartData() 
this.cartData=res.data

      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
    getUpDateCartData(id:string , count:number):void{
    this.cartService.upDataProudctCart(id , count).subscribe({
      next:(res)=>{
console.log(res.data)
// this.getLocedCartData() 
this.cartData=res.data

      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
