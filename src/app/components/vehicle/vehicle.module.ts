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
import { LinkToUserComponent } from './link-to-user/link-to-user.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { HelpersModule } from '../helpers/helpers.module';
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';

@NgModule({
  declarations: [
    ShowVehiclesComponent,
    RoutemapComponent,
    VehicleComponent,
    LinkToUserComponent,
    AddVehicleComponent,
    VehicleInfoComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtRlXHmPwNJ0hHyd2EFNldqWu1Q9y8aHk'
    }),
    HelpersModule
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
