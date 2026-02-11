import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { CartService } from '../../cart/services/cart.service';

@Injectable({
  providedIn: 'root',
})
export class DetailesService  {
  private readonly httpClient = inject(HttpClient)
  getDetailes(id:string|null):Observable<any>{
    return this.httpClient.get(environment.baseUrl + `products/${id}`);
  }

  
}
