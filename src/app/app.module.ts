import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MarkerManager} from "@agm/core";
import { NawinformationComponent } from './components/nawinformation/nawinformation.component';
import { CartrackerComponent } from './components/cartracker/cartracker.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { AuthService } from './shared/services/auth.service';
import { AuthInterceptor } from './shared/services/auth.interceptor';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    MarkerManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
