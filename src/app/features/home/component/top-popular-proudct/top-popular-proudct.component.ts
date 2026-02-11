import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from "../../../../shared/components/card/card.component";
import { Product } from '../../../../core/models/product.interface';
import { ProudctsService } from '../../../../core/services/proudcts.service';

@Component({
  selector: 'app-top-popular-proudct',
  imports: [CardComponent],
  templateUrl: './top-popular-proudct.component.html',
  styleUrl: './top-popular-proudct.component.css',
})
export class TopPopularProudctComponent implements OnInit {
    private readonly ProudctsService =inject(ProudctsService);
  proudctList:Product[]=[]
  ngOnInit(): void {
    this.getAllProudctsData()
  }
  getAllProudctsData():void{
    this.ProudctsService.getAllProducts().subscribe({
      next:(res)=>{
// console.log(res.data)
// this.proudctList = res.data.filter(proudct => proudct. < 100);
this.proudctList=res.data

      },
      error:(err)=>{
        console.log(err)
      },
    });
} 

}
