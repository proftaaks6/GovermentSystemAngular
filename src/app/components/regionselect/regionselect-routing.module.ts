import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionselectComponent } from './regionselect.component';

const routes: Routes = [
  { path: '', component: RegionselectComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegionselectRoutingModule {}
