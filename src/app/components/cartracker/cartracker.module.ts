import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertCartrackerComponent } from './insert-cartracker/insert-cartracker.component';
import { CartrackerComponent } from './cartracker.component';

import { CartrackerRoutingModule } from './cartracker-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { LinkToUserComponent } from './link-to-user/link-to-user.component';

@NgModule({
  declarations: [
    InsertCartrackerComponent,
    CartrackerComponent,
    LinkToUserComponent
  ],
  imports: [
    CommonModule,
    CartrackerRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CartrackerModule { }
