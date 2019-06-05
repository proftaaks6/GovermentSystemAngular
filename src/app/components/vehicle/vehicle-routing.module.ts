import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ShowVehiclesComponent} from "./show-vehicles/show-vehicles.component";
import { VehicleComponent } from './vehicle.component';
import { LinkToUserComponent } from './link-to-user/link-to-user.component';
import {AddVehicleComponent} from "./add-vehicle/add-vehicle.component";
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';

const routes: Routes = [
  { path: 'all', component: ShowVehiclesComponent },
  { path: 'change', component: LinkToUserComponent },
  { path: 'add', component: AddVehicleComponent },
  { path: 'info/:chassis', component: VehicleInfoComponent },
  { path: '', component: VehicleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule {}
