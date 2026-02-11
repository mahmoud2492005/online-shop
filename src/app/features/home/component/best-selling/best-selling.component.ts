import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../../../core/models/product.interface';
import { ProudctsService } from '../../../../core/services/proudcts.service';
import { CardComponent } from "../../../../shared/components/card/card.component";

@Component({
  selector: 'app-best-selling',
  imports: [CardComponent],
  templateUrl: './best-selling.component.html',
  styleUrl: './best-selling.component.css',
})
export class BestSellingComponent implements OnInit {

  private readonly ProudctsService = inject(ProudctsService);
  proudctList: Product[] = [];

  ngOnInit(): void {
    this.getAllProudctsData();
  }

  getAllProudctsData(): void {
    this.ProudctsService.getAllProducts().subscribe({
      next: (res) => {
        // console.log(res.data);

        this.proudctList = res.data
          .filter((item: Product) => item.priceAfterDiscount);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
