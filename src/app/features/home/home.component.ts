import { Component, inject, OnInit } from '@angular/core';
import { ProudctsService } from '../../core/services/proudcts.service';
import { Product } from '../../core/models/product.interface';
import { CardComponent } from "../../shared/components/card/card.component";
import { PageInfoComponent } from "./component/page-info/page-info.component";
import { Slider1Component } from "./component/slider1/slider1.component";
import { Slider2Component } from "./component/slider2/slider2.component";
import { FlashSaleComponent } from "./component/flash-sale/flash-sale.component";
import { NewCollectionComponent } from "./component/new-collection/new-collection.component";
import { BestSellingComponent } from "./component/best-selling/best-selling.component";
import { TopPopularProudctComponent } from "./component/top-popular-proudct/top-popular-proudct.component";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { BestSelling2Component } from "../../shared/components/best-selling2/best-selling2.component";
import { SliderLandigComponent } from "../landing/component/slider-landig/slider-landig.component";

@Component({
  selector: 'app-home',
  imports: [PageInfoComponent, Slider1Component, Slider2Component, FlashSaleComponent, NewCollectionComponent, NavbarComponent, BestSelling2Component, SliderLandigComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent  {

}
