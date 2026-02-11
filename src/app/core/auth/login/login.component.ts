
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { InputComponent } from "../../../shared/components/input/input.component";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, InputComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  private readonly fb = inject(FormBuilder)
  private readonly cookieService = inject(CookieService)
  showError:string=''
  showMsgSucess:string=''
  isLoading:boolean=false
  // res!:Subscription
  res:Subscription=new Subscription()

  eyePass:boolean=true

  
  // loginForm:FormGroup = new FormGroup({
  //   email:new FormControl(null , [Validators.required, Validators.email]),
  //   password:new FormControl(null , [Validators.required, Validators.pattern(/^(?=.{8,})((?=.*\d)|(?=.*\W))(?!.*[.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]),

  // });
  //new syntax to form groug 
loginForm:FormGroup= this.fb.group({
  email:[null , [Validators.required, Validators.email]],
  password:[null , [Validators.required, Validators.pattern(/^(?=.{8,})((?=.*\d)|(?=.*\W))(?!.*[.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]]
});

  signUp():void{
    if(this.res){
      this.res.unsubscribe()
    }
    this.isLoading=true
      this.showError = '';
  this.showMsgSucess = '';
    if(this.loginForm.valid){
    this.res= this.authService.login(this.loginForm.value).subscribe({
      next:(res)=>{
        this.isLoading=false
console.log(res)
this.showMsgSucess=res.message
if(res.message==="success"){
this.cookieService.set('token', res.token)
// console.log( this.authService.decodeToken())
setTimeout(()=>{
this.showMsgSucess=''
this.router.navigate(['/home']);

},1000)
      }},
            error:(err)=>{
        this.isLoading=false
        this.showError=err.error.message

console.log(err)
      }
    })
    }else{
      this.loginForm.markAllAsTouched()
      this.isLoading=false
    }
  }}