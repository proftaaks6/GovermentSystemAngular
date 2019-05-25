import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartrackerComponent } from './cartracker.component';
import { InsertCartrackerComponent } from './insert-cartracker/insert-cartracker.component';
import { LinkToCarComponent } from './link-to-user/link-to-car.component';

const routes: Routes = [
  { path: '', component: CartrackerComponent },
  { path: 'change', component: LinkToCarComponent },
  { path: 'insert', component: InsertCartrackerComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartrackerRoutingModule {}
