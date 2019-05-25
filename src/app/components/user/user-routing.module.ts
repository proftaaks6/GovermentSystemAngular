import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertUserComponent } from './insert-user/insert-user.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { UserComponent } from './user.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { path: 'insert', component: InsertUserComponent },
  { path: 'all', component: ShowUsersComponent },
  { path: '{id}', component: UserInfoComponent },
  { path: '', component: UserComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
