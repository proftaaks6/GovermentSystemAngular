import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'tracker', loadChildren: './components/cartracker/cartracker.module#CartrackerModule', canActivate: [AuthGuard] },
  { path: 'user', loadChildren: './components/user/user.module#UserModule', canActivate: [AuthGuard] },
  {path: 'vehicle', loadChildren: './components/vehicle/vehicle.module#VehicleModule', canActivate: [AuthGuard] },
  {path: 'naw', loadChildren: './components/nawinformation/nawinformation.module#NawinformationModule', canActivate: [AuthGuard] },
  {path: 'regionselect', loadChildren: './components/regionselect/regionselect.module#RegionselectModule', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
