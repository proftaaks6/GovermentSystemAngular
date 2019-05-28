
import { Component, TemplateRef } from '@angular/core';
import { CartrackerService } from '../../../shared/services/cartracker.service'

@Component({
  selector: 'app-insert-cartracker',
  templateUrl: './insert-cartracker.component.html',
})
export class InsertCartrackerComponent {
  error = false;
  success = false;

  constructor(private cartrackerService: CartrackerService) {

  }

  async onSubmit() {
    this.error = false;
    this.success = false;

    let result = await this.cartrackerService.createTracker();
    if (result) {
      this.success = true;
    } else {
      this.error = true;
    }
  }




}
