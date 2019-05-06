import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cartracker', loadChildren: './components/cartracker/cartracker.module#CartrackerModule', /* canActivate: [AuthGuard] */ },
  { path: 'user', loadChildren: './components/user/user.module#UserModule', /* canActivate: [AuthGuard] */ }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
