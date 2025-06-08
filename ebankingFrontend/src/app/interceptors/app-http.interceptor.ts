import { inject } from '@angular/core';
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpEvent
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const AppHttpInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {

  const authService = inject(AuthService);

  // console.log("****************");
  // console.log(request.url);

  if (!request.url.includes("/auth/login")) {
    const newRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + authService.accessToken)
    });

    return next(newRequest).pipe(
      catchError(err => {
        if (err.status === 401) {
          authService.logout();
        }
        return throwError(() => err.message);
      })
    );
  } else {
    return next(request);
  }
};
