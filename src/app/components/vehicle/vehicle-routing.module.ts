import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ShowVehiclesComponent} from "./show-vehicles/show-vehicles.component";
import { VehicleComponent } from './vehicle.component';

const routes: Routes = [
  { path: 'all', component: ShowVehiclesComponent },
  { path: '', component: VehicleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule {}
