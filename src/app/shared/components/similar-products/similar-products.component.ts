import { Component, inject } from '@angular/core';
import { ProudctsService } from '../../../core/services/proudcts.service';
import { Product } from '../../../core/models/product.interface';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-similar-products',
  imports: [CardComponent],
  templateUrl: './similar-products.component.html',
  styleUrl: './similar-products.component.css',
})
export class SimilarProductsComponent {

      private readonly ProudctsService =inject(ProudctsService);
  proudctList:Product[]=[]
  ngOnInit(): void {
    this.getAllProudctsData()
  }
  getAllProudctsData(pageNumber:number=1):void{

    this.ProudctsService.getAllProducts(pageNumber).subscribe({
      next:(res)=>{
                this.proudctList = res.data

      },
      error:(err)=>{

        console.log(err)
      },
    });
} 

}
