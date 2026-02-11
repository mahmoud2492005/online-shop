import { Component, inject, Input, OnInit } from '@angular/core';
import { CardComponent } from "../../../../shared/components/card/card.component";
import { Product } from '../../../../core/models/product.interface';
import { ProudctsService } from '../../../../core/services/proudcts.service';

@Component({
  selector: 'app-flash-sale',
  imports: [CardComponent],
  templateUrl: './flash-sale.component.html',
  styleUrl: './flash-sale.component.css',
})
export class FlashSaleComponent implements OnInit {
    @Input({required:true}) title!:string;
    @Input({required:true}) text!:string;
    @Input({required:true}) sliceNum!:number;

  

  // private readonly ProudctsService = inject(ProudctsService);
  // proudctList: Product[] = [];

  // ngOnInit(): void {
  //   this.getAllProudctsData();
  // }

  // getAllProudctsData(): void {
  //   this.ProudctsService.getAllProducts().subscribe({
  //     next: (res) => {

  //       this.proudctList = res.data
  //         .filter((item: Product) => item.quantity < 100);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }
  


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