import { Component, inject, OnInit } from '@angular/core';
import { DecodeTokenService } from '../../shared/decode-token.service';
import { DecodeToken } from '../../shared/decode-token.interface';
import { FlashSaleComponent } from "../home/component/flash-sale/flash-sale.component";

@Component({
  selector: 'app-brands',
  imports: [FlashSaleComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
})
export class BrandsComponent  {
 
  }


