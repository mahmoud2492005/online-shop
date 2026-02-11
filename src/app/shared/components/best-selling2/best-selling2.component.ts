import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.interface';
import { ProudctsService } from '../../../core/services/proudcts.service';
import { FiltarationPipe } from "../../pipes/filtaration-pipe";
import { CardComponent } from "../card/card.component";
import { NgxPaginationModule } from "ngx-pagination";
import { FlowbiteService } from '../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-best-selling2',
  imports: [FiltarationPipe, CardComponent, NgxPaginationModule],
  templateUrl: './best-selling2.component.html',
  styleUrl: './best-selling2.component.css',
})
export class BestSelling2Component implements OnInit {



  showFilters = false;
  pageSize!:number
  sliceNum:number=4

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
          .filter((item: Product) => item.priceAfterDiscount);      
        this.pageSize=res.metadata.limit;
        this.p=res.metadata.currentPage;
        this.total=res.results

      },
      error:(err)=>{

        console.log(err)
      },
    });
} 

 

}

