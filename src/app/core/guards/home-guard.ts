import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const homeGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  // لو المستخدم عامل تسجيل دخول
  if (cookieService.get('token')) {

    return router.parseUrl('/home');
     

    // return router.navigate(['/cart'])
    // رجّعه على الهوم
  } else {
    return true; // دخّله على صفحة اللوجين/ريجيستر
  }
};