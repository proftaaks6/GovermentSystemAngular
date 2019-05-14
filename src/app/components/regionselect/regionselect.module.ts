import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionselectComponent } from './regionselect.component';
import { RegionselectRoutingModule } from './regionselect-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AgmCoreModule, GoogleMapsAPIWrapper} from "@agm/core";

@NgModule({

  providers: [GoogleMapsAPIWrapper],
  declarations: [RegionselectComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJ75KHIHKCbbKLZsQpYv5xGHTPA3gOHfg',
      libraries: ["places"]
    }),
    CommonModule,
    RegionselectRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ]
})
export class RegionselectModule { }
