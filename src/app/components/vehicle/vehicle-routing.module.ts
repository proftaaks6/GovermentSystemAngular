import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ShowVehiclesComponent} from "./show-vehicles/show-vehicles.component";
import { VehicleComponent } from './vehicle.component';
import { LinkToUserComponent } from './link-to-user/link-to-user.component';
import {AddVehicleComponent} from "./add-vehicle/add-vehicle.component";

const routes: Routes = [
  { path: 'all', component: ShowVehiclesComponent },
  { path: 'change', component: LinkToUserComponent },
  { path: 'add', component: AddVehicleComponent },
  { path: '', component: VehicleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule {}
