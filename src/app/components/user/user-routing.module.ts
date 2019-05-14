import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertUserComponent } from './insert-user/insert-user.component';
import { ShowUsersComponent } from './show-users/show-users.component';

const routes: Routes = [
  { path: 'insert', component: InsertUserComponent },
  { path: '', component: ShowUsersComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
