import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartrackerComponent } from './cartracker.component';
import { LinkToUserComponent } from './link-to-user/link-to-user.component';

const routes: Routes = [
  { path: '', component: CartrackerComponent },
  { path: 'change', component: LinkToUserComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartrackerRoutingModule {}
