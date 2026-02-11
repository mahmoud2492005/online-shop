import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../cart/services/cart.service';
import { AuthService } from '../../core/auth/services/auth.service';
import { DecodeToken } from '../../shared/decode-token.interface';
import { DecodeTokenService } from '../../shared/decode-token.service';
import { Allorders } from '../checkout/allorders.interface';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
  // import * as html2pdf from 'html2pdf.js';



@Component({
  selector: 'app-allorders',
  imports: [CommonModule , RouterLink],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.css',
})
export class AllordersComponent implements OnInit {
   idToken:DecodeToken={} as DecodeToken
   allorderData:Allorders[]=[] as Allorders[]
  //  idCart:string|null = this.allorderData.
  ngOnInit(): void {
        this.userId = this.decodeTokenService.getUserId();
    console.log("USER ID = ", this.userId);
    this.getAllUserOrder(this.userId)
  }
  private readonly decodeTokenService = inject(DecodeTokenService)
  private readonly cartService = inject(CartService)
    userId: string|null=null;
  decode():void{
    this.decodeTokenService.decodeToken()
    // this.decode()
    

}
getAllUserOrder(id:string|null):void{
  this.cartService.getUserOrders(id).subscribe({
    next:(res)=>{
      this.allorderData=res
      console.log(this.allorderData)
    },
    error:(err)=>{
      console.log(err)
    }

  })

}




}