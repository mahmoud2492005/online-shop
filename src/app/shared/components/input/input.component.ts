import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() control:any
  @Input() typeInput!:string
  @Input() idInput!:string
  @Input() labelInput!:string
  @Input() placeHolder!:string
  @Input() element:string= 'input'
eyePass:boolean=true

}
