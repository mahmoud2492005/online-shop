import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../core/models/product.interface';
import { ProudctsService } from '../../core/services/proudcts.service';
import { CardComponent } from "../../shared/components/card/card.component";
import {NgxPaginationModule} from 'ngx-pagination';
import { FiltarationPipe } from '../../shared/pipes/filtaration-pipe';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-products',
  imports: [CardComponent, NgxPaginationModule, FiltarationPipe, FormsModule, NavbarComponent, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  // fullItems:boolean=false
  // women:boolean=false
  // men:boolean=false
  // electronics:boolean=false
  // more:boolean=false
  //pagnation
  pageSize!:number
  p!:number
  total!:number
  filterBy:string='Full Outfit'
      private readonly ProudctsService =inject(ProudctsService);
      // private readonly ngxSpinnerService =inject(NgxSpinnerService);
  proudctList:Product[]=[]
  ngOnInit(): void {
    this.getAllProudctsData()
  }
  getAllProudctsData(pageNumber:number=1):void{
        // this.ngxSpinnerService.show()

    this.ProudctsService.getAllProducts(pageNumber).subscribe({
      next:(res)=>{
        // this.ngxSpinnerService.hide()
        this.proudctList = res.data;
        this.pageSize=res.metadata.limit;
        this.p=res.metadata.currentPage;
        this.total=res.results

      },
      error:(err)=>{
        // this.ngxSpinnerService.hide()

        console.log(err)
      },
    });
    
//         if(this.fullItems===true){
//         this.proudctList = res.data
// }

//ده كان الشرط الي انا كنت عامله
//         if(this.women===true){
//         this.proudctList = this.proudctList.filter((itemProudct:Product)=>itemProudct.category.name==="Women's Fashion")
//       console.log(this.proudctList)
//       console.log('this.proudctList')

     
// }
//         if(this.men===true){
//         this.proudctList = this.proudctList.filter((itemProudct:Product)=>itemProudct.category.name==="men's-fashion")

// }
//         if(this.electronics===true){
//         this.proudctList = this.proudctList.filter((itemProudct:Product)=>itemProudct.category.name==="Electronics")

// }
//         if(this.more===true){
//         this.proudctList = this.proudctList.filter((itemProudct:Product)=>itemProudct.category.name==="")

// }
} 
}


