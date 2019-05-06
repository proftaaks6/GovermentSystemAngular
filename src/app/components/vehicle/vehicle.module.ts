import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import {VehicleComponent} from "./vehicle.component";
import {VehicleRoutingModule} from "./vehicle-routing.module";
import { RoutemapComponent } from './routemap/routemap.component';
import {AgmCoreModule, GoogleMapsAPIWrapper} from "@agm/core";
import {MarkerManager} from "@agm/core";

@NgModule({
  declarations: [
    VehicleComponent,
    RoutemapComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBhFnZsG5KqWljfwifxQf-OXVHgSZY-_-c'
    })
  ],
  entryComponents: [
    RoutemapComponent
  ],
  providers: [
    MarkerManager,
    GoogleMapsAPIWrapper
  ]
})
export class VehicleModule { }
