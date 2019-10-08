import { ErrorInterceptor } from './core/auth/error.interceptor';
import { JwtInterceptor } from './core/auth/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material';
import { DragonModule } from './dragon/dragon.module';
import { UserModule } from './user/user.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './core/auth/fake-backend';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragonModule,
    UserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  // criando um backend falso para autenticação de usuário
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
