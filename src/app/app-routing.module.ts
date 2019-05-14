import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cartracker', loadChildren: './components/cartracker/cartracker.module#CartrackerModule', /* canActivate: [AuthGuard] */ },
  { path: 'user', loadChildren: './components/user/user.module#UserModule', /* canActivate: [AuthGuard] */ },
  {path: 'vehicle', loadChildren: './components/vehicle/vehicle.module#VehicleModule'},
  {path: 'naw', loadChildren: './components/nawinformation/nawinformation.module#NawinformationModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

