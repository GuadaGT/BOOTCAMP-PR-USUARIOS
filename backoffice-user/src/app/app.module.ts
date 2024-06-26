import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { UserListComponent } from './entities/user/user-list/user-list.component';
import { UserFormComponent } from './entities/user/user-form/user-form.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpRequest} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpRequestIntercept} from "./config/interceptors/http-request-interceptor.inteceptor";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    UserListComponent,
    UserFormComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        NgOptimizedImage
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestIntercept,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
