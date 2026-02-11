import { NgClass } from '@angular/common';
// import { AuthService } from './../../../core/auth/services/auth.service';
// import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './../../../core/services/flowbite.service';
import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/auth/services/auth.service';
import { CartService } from '../../../features/cart/services/cart.service';
import { CookieService } from 'ngx-cookie-service';
// import { NgClass } from "../../../../../node_modules/@angular/common/common_module.d";
  // import {  NgClass } from '@angular/common';

// import { Router } from 'express';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
    constructor(private FlowbiteService: FlowbiteService , private router: Router ) {}
  private readonly authService = inject(AuthService)
  private readonly cartService = inject(CartService)
  private readonly cookieService =inject(CookieService)

  count!:number

// constructor(private router: Router) {}
    @Input({required:true}) isLogin!:boolean;
    @Input({required:true}) isLanding!:boolean;
    @Input({required:true}) isPageProudcts!:boolean;
    // @Input({required:true}) isPageHome!:boolean;
  ngOnInit(): void {
    this.FlowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
     this. getNumberOfCart()
     this.getCountCart()
    });
    //  const path =this.router.url ||''
    //  this.check=path.includes('products')

  }
  getNumberOfCart():void{
    this.cartService.countNumber.subscribe({
      next:(value)=>{
        this.count=value
      }
    })
  }
signOutBridge():void{
  this.authService.signOut()
}
signOutLanding():void{
      this.cookieService.delete('token');

}

getCountCart():void{
  this.cartService.getLocedProudctCart().subscribe({
    next:(res)=>{
      this.cartService.countNumber.next(res.numOfCartItems)
    }
  })
}
}



