import { ShippingAddress } from './../cart/proudctbuy.interface';
import { FlowbiteService } from './../../core/services/flowbite.service';
import { subscribe } from 'diagnostics_channel';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { InputComponent } from "../../shared/components/input/input.component";
import { AuthService } from '../../core/auth/services/auth.service';
import { CartService } from '../cart/services/cart.service';
import { Proudctbuy } from '../cart/proudctbuy.interface';
import { CardComponent } from "../../shared/components/card/card.component";
// import { FlowbiteService } from '../../core/services/flowbite.service';
import { initFlowbite, Modal } from 'flowbite';
import { DetailesAdress } from './detailes-adress.interface';
import { InputRadioComponent } from "../../shared/input-radio/input-radio.component";
import { Cart } from '../cart/models/interface/cart.interface';
import { CommonModule, DatePipe } from '@angular/common';
import { SimilarProductsComponent } from "../../shared/components/similar-products/similar-products.component";

@Component({
  selector: 'app-checkout',
  imports: [DatePipe, CommonModule, ɵInternalFormsSharedModule, ReactiveFormsModule, InputComponent, RouterLink, FormsModule, SimilarProductsComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  private readonly router = inject(Router)

  addresses: DetailesAdress[] = [];
editMode = false;
currentId!: number;

  previewImage: string | ArrayBuffer | null = "https://placehold.co/400" ;
 constructor(private flowbiteService: FlowbiteService) {}


onImageSelected(event: any) {
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    this.previewImage = reader.result;
  };
}
private readonly fb = inject(FormBuilder)
private readonly activatedRoute = inject(ActivatedRoute)
private readonly authService = inject(AuthService)
  private readonly cartService = inject(CartService)

checkOutForm!:FormGroup
checkFormDesign!:FormGroup
id: string |null = null
show:boolean = true
proudctCart!:Proudctbuy

ngOnInit(): void {
 this. getLocedCartData()
  this.initForm()

    const data = localStorage.getItem('addresses');
  if (data) {
    this.addresses = JSON.parse(data);
  }

      this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  // this.formDesign()
  this.getId()
  // this. token()
}
initForm():void{
this.checkOutForm= this.fb.group({
  //  firstName:[null , [Validators.required]],

  shippingAddress: this.fb.group({
    details:[null , [Validators.required]],
    phone:[null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]],
    city:[null , [Validators.required]]
  })


})


}


// formDesign():void{
// this.checkFormDesign= this.fb.group({

//     selectedAddress: [null, Validators.required],
//     shipmentMethod: [null, Validators.required],
//     paymentMethod: [null, Validators.required]



// })

// }
getId():void{
  this.activatedRoute.paramMap.subscribe({
    next:(urlParm)=>{
this.id= urlParm.get('id')
    }
  })
}
submitForm():void{
  console.log(this.checkFormDesign)
  if(this.checkOutForm.valid){
console.log(this.checkOutForm.value)
console.log(this.id)
this.show=false
this.cartService.checkOutSession(this.id , this.checkOutForm.value  ).subscribe({
next:(res)=>{
  console.log(res)
  if(res.status==='success'){
    window.open(res.session.url , '_self')

  }
},
error:(err)=>{
console.log(err)
}

})


  
}}
// closeInfo():void{
//   this.show=false
// }
submitFormByCash():void{
  if(this.checkOutForm.valid){
console.log(this.checkOutForm.value)
console.log(this.id)
this.show=false
this.cartService.creatCashOrder(this.id , this.checkOutForm.value  ).subscribe({
next:(res)=>{
  console.log(res.data)
  this.router.navigate(['/allorders']);
  this.proudctCart=res.data
},
error:(err)=>{
console.log(err)
}
}) 
}
}
saveAddress() {
  // console.log("lllllllllllllllllllllllllll")
  if (this.checkOutForm.invalid) return;

  const formValue = this.checkOutForm.value;
  // const formValueFirstName = this.checkFormDesign.value;

  const address: DetailesAdress = {
    id: this.editMode ? this.currentId : Date.now(),
    // name:formValue.firstName,
    city: formValue.shippingAddress.city,
    details: formValue.shippingAddress.details,
    phone: formValue.shippingAddress.phone,
    // type: formValue.site
  };

  if (this.editMode) {
    const index = this.addresses.findIndex(a => a.id === this.currentId);
    this.addresses[index] = address;
    this.editMode = false;
  } else {
    this.addresses.push(address);
  }

  localStorage.setItem('addresses', JSON.stringify(this.addresses));
  this.checkOutForm.reset();
  const modal = document.getElementById('crud-modal');
modal?.classList.add('hidden');

}
deleteAddress(id: number) {
  this.addresses = this.addresses.filter(a => a.id !== id);
  localStorage.setItem('addresses', JSON.stringify(this.addresses));
}
editAddress(address: DetailesAdress) {

  this.editMode = true;
  this.currentId = address.id;

  this.checkOutForm.patchValue({
    // firstName: address.name,
    shippingAddress: {
      city: address.city,
      details: address.details,
      phone: address.phone
    },
    // site: address.type
  });
}
selectedAddress: DetailesAdress | null = null;
onAddressSelect(address: DetailesAdress) {
  this.selectedAddress = address;

  // حدث الفورم مباشرة
  this.checkOutForm.patchValue({
    shippingAddress: {
      details: address.details,
      phone: address.phone,
      city: address.city
    }
  });

  // جرب تعرض الشكل في الكونسول
  console.log("Selected address for backend:", this.checkOutForm.value);
}



shippingCosts:number=0
option1:number=100
// option2:number=0
PriorityShipping(){
//  this.shippingCosts= this.option1+100
this.option1=this.shippingCosts+100
this.shippingCosts=0
  
  console.log(this.option1)


}
Schedule (){

this.option1=this.shippingCosts+300
this.shippingCosts=0

  console.log(this.option1)



}
free(){

this.option1=0
this.shippingCosts=0

  console.log(this.option1)



}


  // console.log('shippingCosts')
  payvisa:boolean=true
  chooseVisa(){
    this.payvisa=true
    console.log(this.payvisa)
}
    chosseCash(){
    this.payvisa=false
    console.log(this.payvisa)

  }
  

FinshPayMent():void{
  if(this.payvisa===true){
   this. submitForm()

  } else{
    this.submitFormByCash()
  }
}
//عشان اعرف السعر 
  cartData:Cart={} as Cart
    getLocedCartData():void{
    this.cartService.getLocedProudctCart().subscribe({
      next:(res)=>{
console.log(res.data)
this.cartData=res.data

      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

getDateAfter(days: number): Date {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}




}
