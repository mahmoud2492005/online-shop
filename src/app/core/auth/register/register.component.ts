
import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { InputComponent } from "../../../shared/components/input/input.component";
import { subscribe } from 'diagnostics_channel';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule, InputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  private readonly cookieService = inject(CookieService)

  showError:string=''
  showMsgSucess:string=''
  isLoading:boolean=false
  res:Subscription=new Subscription()
  eyePass:boolean=true
  eyePassRe:boolean=true
  
  // registerForm:FormGroup = new FormGroup({
  //   name:new FormControl(null , [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  //   email:new FormControl(null , [Validators.required, Validators.email]),
  //   password:new FormControl(null , [Validators.required, Validators.pattern(/^(?=.{8,})((?=.*\d)|(?=.*\W))(?!.*[.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]),
  //   rePassword:new FormControl(null),

  // },{validators:this.confirmPassword});
  registerForm!:FormGroup
  ngOnInit(): void {
    this.initForm()
  }
  initForm():void{
    this.registerForm= new FormGroup({
    name:new FormControl(null , [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email:new FormControl(null , [Validators.required, Validators.email]),
    password:new FormControl(null , [Validators.required, Validators.pattern(/^(?=.{8,})((?=.*\d)|(?=.*\W))(?!.*[.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]),
    rePassword:new FormControl(null),

  },{validators:this.confirmPassword})
  }
  signUp():void{
    if(this.res){
      this.res.unsubscribe()
    }
    this.isLoading=true
      this.showError = '';
  this.showMsgSucess = '';
    if(this.registerForm.valid){
    this.res= this.authService.register(this.registerForm.value).subscribe({
      next:(res)=>{
        this.isLoading=false
console.log(res)
this.showMsgSucess=res.message
if(res.message==="success"){
this.cookieService.set('token', res.token)

setTimeout(()=>{
this.showMsgSucess=''
this.router.navigate(['/home']);
},1000)
}
      },
            error:(err)=>{
        this.isLoading=false
        this.showError=err.error.message
        
console.log(err)
      }
    })
    }else{
      this.registerForm.markAllAsTouched()
      this.registerForm.get('rePassword')?.patchValue('')
      this.isLoading=false

      // this.registerForm.get('rePassword')?.setErrors({mismatch:true})
    }
  }
  confirmPassword(group:AbstractControl){
    if(group.get('password')?.value===group.get('rePassword')?.value){
return null
    } else{
      group.get('rePassword')?.setErrors({mismatch:true});
      return {mismatch:true}
    }

      //  return  group.get('password')?.value===group.get('rePassword')?.value ? null : {mismatch:true};
  }
}
