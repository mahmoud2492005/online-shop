import { DetailesService } from './../../../features/details/services/detailes.service';
import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../core/models/product.interface';
import { RouterLink } from "@angular/router";
import { CartService } from '../../../features/cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
    private readonly cartService = inject(CartService)
    private readonly toastrService = inject(ToastrService)
solidHeart:boolean=false
toggleHeart(id: string): void {
  if (this.cartService.addproductsHeart.has(id)) {
    this.cartService.addproductsHeart.delete(id); // يقفله
  } else {
    this.cartService.addproductsHeart.add(id); // يفتحه
  }
}
toggleHeart2(id: string): void {
    this.cartService.addproductsHeart.add(id);

}


checkSolidHeart(id:string):boolean{
return this.cartService.addproductsHeart.has(id)
}



 @Input({required:true}) proudct:Product={} as Product

  addProudctCartItem(id:string):void{
    this.cartService.addProudctCart(id).subscribe({
next:(res)=>{
  this.cartService.countNumber.next(res.numOfCartItems)

console.log( this.cartService.countNumber)
if(res.status==='success'){
  this.toastrService.success(res.message)

}
},
error:(err)=>{
console.log(err)
}
    })
  }

}
