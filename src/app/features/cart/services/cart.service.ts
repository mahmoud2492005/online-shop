import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // solidHeart:boolean=false
  addproductsHeart: Set<string> = new Set() ;
  addProudctCartHeart(proudctId:string):void{
    this.addproductsHeart.add(proudctId)
    

  }
    deleteProudctCartHeart(proudctId:string):void{
    this.addproductsHeart.delete(proudctId)

  }
  // checkHeart(proudctId:string):boolean{
  
  //   return this.addproductsHeart.has(proudctId)
  // }

  
 
  private readonly HttpClient =inject(HttpClient)
  private readonly cookieService =inject(CookieService)
  //  myHeadersToken:object=   {
  //     headers:{
  //       token: this.cookieService.get('token')
  //     }
  //   }
addProudctCart(id:string):Observable <any>{
  return this.HttpClient.post(environment.baseUrl + 'cart' , 

    {
    productId: id
    },
  // this.myHeadersToken

  )
}
getLocedProudctCart():Observable<any>{
  return this.HttpClient.get(environment.baseUrl + 'cart' , 
  // this.myHeadersToken
)
}
deletProudctCart(id:string):Observable<any>{
  return this.HttpClient.delete(environment.baseUrl + `cart/${id}` , 
  // this.myHeadersToken
)
}
upDataProudctCart(id:string, count:number):Observable<any>{
  return this.HttpClient.put(environment.baseUrl + `cart/${id}` ,
    {
    "count": count
}
    
    , 
  // this.myHeadersToken
)
}
getUserOrders(id:string|null):Observable<any>{
  return this.HttpClient.get(environment.baseUrl + `orders/user/${id}` , 
  // this.myHeadersToken
)
}
checkOutSession(id:string|null, data:object):Observable<any>{
  return this.HttpClient.post(environment.baseUrl + `orders/checkout-session/${id}?url=http://localhost:4200` , data , 
  // this.myHeadersToken
)
}
creatCashOrder(id:string|null, data:object):Observable<any>{
  return this.HttpClient.post(environment.baseUrl + `orders/${id}` , data , 
  // this.myHeadersToken
)
}
countNumber:BehaviorSubject<number>=new BehaviorSubject(0)
  
}
