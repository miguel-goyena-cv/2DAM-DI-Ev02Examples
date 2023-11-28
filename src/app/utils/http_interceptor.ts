import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { tap } from "rxjs/internal/operators/tap";

// export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
//     console.log(req.url);
//     return next(req);
//   }

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    return next(req).pipe(tap(event => {
        console.log(req.url);
        if (event.type === HttpEventType.Response) {
            console.log(req.url, 'returned a response with status', event.status);
        }
    }));
  }