import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class HttpTokenInterceptor implements HttpInterceptor {

  firstPart = 'ghp_XCJeMYi1SIAxiJ5f7iOPbe';
  lastPart = '34TWccNX4E7D6c'
  constructor(
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const token = this.firstPart + this.lastPart;

    // console.log(token);

    const request = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });

    return next.handle(request).pipe(catchError(err => {
      // const error = err.error.message || err.statusText;
      return throwError(err);
    }));
  }

}


// intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//   const token = 'ghp_embRIRr39' + 'sZBpk5GbQsfjIcVr' + '2czyM0kXjFJ';
//
//   if (token) {
//     request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
//   }
//
//   if (!request.headers.has('Content-Type')) {
//     request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
//   }
//
//   request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
//
//   return next.handle(request).pipe(
//     map((event: HttpEvent<any>) => {
//       if (event instanceof HttpResponse) {
//         // console.log('event--->>>', event);
//       }
//       return event;
//     }));
// }
