import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertUserComponent } from './insert-user/insert-user.component';
import { UserRoutingModule } from './user-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [InsertUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
