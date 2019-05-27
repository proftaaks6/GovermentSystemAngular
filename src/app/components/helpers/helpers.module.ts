import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberOnlyDirective } from 'src/app/models/number.directive';

@NgModule({
  declarations: [
    NumberOnlyDirective],
  imports: [
    CommonModule
  ]
})
export class HelpersModule { }
