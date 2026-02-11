import { CookieService } from 'ngx-cookie-service';
import { inject, Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { DecodeToken } from './decode-token.interface';
import { AuthService } from '../core/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DecodeTokenService {
  private readonly cookieService = inject(CookieService);
  private readonly authService = inject(AuthService);

  decodeToken(): DecodeToken | null {
    const tokenString = this.cookieService.get('token');

    if (!tokenString) return null;

    try {
      const decoded = jwtDecode<DecodeToken>(tokenString);
      // console.log(decoded);
      return decoded;
    } catch (err) {
      console.error("Invalid token", err);
      this.authService.signOut();
      return null;
    }
  }

  /** ⬅️ دالة تجيب الـ id فقط */
  getUserId(): string | null {
    const decoded = this.decodeToken();
    return decoded ? decoded.id : null;
  }
}
