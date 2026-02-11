import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-nav-layout',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './nav-layout.component.html',
  styleUrl: './nav-layout.component.css',
})
export class NavLayoutComponent {

}
