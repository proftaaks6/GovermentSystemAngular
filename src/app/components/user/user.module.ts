import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertUserComponent } from './insert-user/insert-user.component';
import { UserRoutingModule } from './user-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowUsersComponent } from './show-users/show-users.component';
import { UserComponent } from './user.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { InvoicesComponent } from './invoices/invoices.component';

@NgModule({
  declarations: [InsertUserComponent, ShowUsersComponent, UserComponent, StatisticsComponent, UserInfoComponent, InvoicesComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
