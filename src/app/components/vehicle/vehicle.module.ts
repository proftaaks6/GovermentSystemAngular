import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import {VehicleRoutingModule} from "./vehicle-routing.module";
import { RoutemapComponent } from './routemap/routemap.component';
import {AgmCoreModule, GoogleMapsAPIWrapper} from "@agm/core";
import {MarkerManager} from "@agm/core";
import { ShowVehiclesComponent } from './show-vehicles/show-vehicles.component';
import { VehicleComponent } from './vehicle.component';

@NgModule({
  declarations: [
    ShowVehiclesComponent,
    RoutemapComponent,
    VehicleComponent
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
