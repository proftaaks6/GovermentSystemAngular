import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertUserComponent } from './insert-user/insert-user.component';

const routes: Routes = [
  { path: '', component: InsertUserComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
