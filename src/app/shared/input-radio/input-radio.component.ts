import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-radio',
  imports: [ReactiveFormsModule],
  templateUrl: './input-radio.component.html',
  styleUrl: './input-radio.component.css',
})
export class InputRadioComponent {
    @Input() control:any
  @Input() idInput!:string
  @Input() labelInput!:string
  @Input() nameInput!:string
  // @Input() valueInput!:string

}
