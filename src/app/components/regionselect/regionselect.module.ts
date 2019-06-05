import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionselectComponent } from './regionselect.component';
import { RegionselectRoutingModule } from './regionselect-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AgmCoreModule, GoogleMapsAPIWrapper} from "@agm/core";
import { HelpersModule } from '../helpers/helpers.module';

@NgModule({

  providers: [GoogleMapsAPIWrapper],
  declarations: [RegionselectComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtRlXHmPwNJ0hHyd2EFNldqWu1Q9y8aHk',
      libraries: ["places"]
    }),
    CommonModule,
    RegionselectRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    HelpersModule
  ]
})
export class RegionselectModule { }
