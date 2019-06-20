import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'node_modules/rxjs/internal/Observable';
import { throwError } from 'node_modules/rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiKey = 'api_key=' + environment.apiKeyMovie;
    const urlRequest = request.url.indexOf('?') !== -1 ? request.url + '&' + apiKey : request.url + '?' + apiKey;

    request = request.clone({
      setHeaders: {
        ContentType: 'application/json'
      },
      url: urlRequest
    });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let msgErro = 'Ocorreu um erro. Tente novamente mais tarde.';
        return throwError(msgErro);
      })
    );

  }
}
