import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

const admin = {id: 1, username: 'admin', password: 'admin'};

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const { url, method, headers, body } = request;

      return handleRoute();

      function handleRoute() {
        switch (true) {
          case url.endsWith('/users/authenticate') && method === 'POST':
            return authenticate();
          default:
            console.log(request);
            return next.handle(request);
        }
      }

      function authenticate() {
        const { username, password } = body;
        const user = admin.username === username && admin.password === password;
        if (!user) {
          return error('Usuário ou senha está incorreta');
        }
        return ok({
          id: admin.username,
          username: admin.username,
          token: 'fake-jwt-token'
        });
      }


      function ok(body) {
          return of(new HttpResponse({ status: 200, body }));
      }

      function error(message: string) {
          return throwError({ error: { message } });
      }
    }
}

export const fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
