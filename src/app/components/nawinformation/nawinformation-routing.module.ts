import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NawinformationComponent} from "./nawinformation.component";

const routes: Routes = [
  {
    path: '',
    component: NawinformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NawinformationRoutingModule {}
