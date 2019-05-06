import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {NawinformationComponent} from "./nawinformation.component";
import {NawinformationRoutingModule} from "./nawinformation-routing.module";

@NgModule({
  declarations: [
    NawinformationComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NawinformationRoutingModule,
    ReactiveFormsModule
  ]
})
export class NawinformationModule { }
