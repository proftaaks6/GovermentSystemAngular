import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartrackerComponent } from './cartracker.component';

const routes: Routes = [
  {
      path: '',
      component: CartrackerComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartrackerRoutingModule {}
