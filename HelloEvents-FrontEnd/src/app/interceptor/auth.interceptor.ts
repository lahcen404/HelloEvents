import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../core/services/auth/auth.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  console.log('Interceptor Tokeeeen:', token);

  if (token) {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token)
    });
    return next(clonedReq);
  }

  return next(req);
};
