import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';
import path from 'path';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { HomeComponent } from './features/home/home.component';
import { CartComponent } from './features/cart/cart.component';
import { ProductsComponent } from './features/products/products.component';
import { BrandsComponent } from './features/brands/brands.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { DetailsComponent } from './features/details/details.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { ServicesComponent } from './features/services/services.component';
import { AboutusComponent } from './features/aboutus/aboutus.component';
import { ContactusComponent } from './features/contactus/contactus.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { LandingComponent } from './features/landing/landing.component';
import { authGuard } from './core/guards/auth-guard';
import { homeGuard } from './core/guards/home-guard';
import { AllordersComponent } from './features/allorders/allorders.component';
import { ForgotPasswordComponent } from './core/auth/forgot-password/forgot-password.component';
import { NavLayoutComponent } from './core/layouts/nav-layout/nav-layout.component';
import { FavoriteProductsComponent } from './shared/components/favorite-products/favorite-products.component';

export const routes: Routes = [
    {path:'', redirectTo:'landing', pathMatch:"full"},
    {path:'',component:AuthLayoutComponent , canActivate:[homeGuard]
         ,children:[
        {path:'login',component:LoginComponent    , title:'Login Page'},
    {path:'register', component:RegisterComponent   , title:'Register Page'},
    {path:'forgotPassword', component:ForgotPasswordComponent   , title:'Forgot Password Page'},



    ]},
    //landing 
        {path:'', redirectTo:'landing', pathMatch:"full"},
    {path:'',component:NavLayoutComponent  
         ,children:[
        {path:'landing', component:LandingComponent, title:'Landing Page'},
    ]},

    //blank
    {path:'',component:BlankLayoutComponent  , canActivate:[authGuard]
         , children:[
        {path:'home', component:HomeComponent, title:'Home Page'},
        // {path:'landing', component:LandingComponent, title:'Landing Page'},
        {path:'cart',  loadComponent: () =>import('./features/cart/cart.component').then(c => c.CartComponent), title:'Cart Page'},
        {path:'products',  loadComponent: () => import('./features/products/products.component').then(c => c.ProductsComponent), title:'Products Page'},
        {path:'brands', component:BrandsComponent, title:'Brangs Page'},
        {path:'categories', component:CategoriesComponent, title:'Categories Page'},
        {path:'details/:slug/:id',   loadComponent: () =>import('./features/details/details.component').then(c => c.DetailsComponent), title:'Details Page'},
        {path:'details/:id',    loadComponent: () =>import('./features/details/details.component').then(c => c.DetailsComponent), title:'Details Page'},
        {path:'checkout/:id', component:CheckoutComponent, title:'checkout Page'},

        {path:'services', component:ServicesComponent, title:'services Page'},
        {path:'about', component:AboutusComponent, title:'about Page'},
       
        {path:'contact', component:ContactusComponent, title:'contact Page'},
        {path:'FavoriteProducts', component:FavoriteProductsComponent, title:'Favorite products Page'},

    ] },
        {path:'allorders', component:AllordersComponent, title:'Allorders'},

    {path:'**' , component:NotfoundComponent,title:'NotFound'}


];
