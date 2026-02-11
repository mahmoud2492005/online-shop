import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { SliderLandigComponent } from "./component/slider-landig/slider-landig.component";
import { ContactusComponent } from "../contactus/contactus.component";
import { BestSellingComponent } from "../home/component/best-selling/best-selling.component";
import { BestSelling2Component } from "../../shared/components/best-selling2/best-selling2.component";
import { ServicesComponent } from "../services/services.component";
// import { RouterOutlet } from "../../../../node_modules/@angular/router/router_module.d";

@Component({
  selector: 'app-landing',
  imports: [SliderLandigComponent, ContactusComponent, BestSelling2Component, ServicesComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {

}
