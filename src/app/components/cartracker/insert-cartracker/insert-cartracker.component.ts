
import { Component, TemplateRef } from '@angular/core';
import { CartrackerService } from '../../../shared/services/cartracker.service'

@Component({
  selector: 'app-insert-cartracker',
  templateUrl: './insert-cartracker.component.html',
})
export class InsertCartrackerComponent {

  constructor(private cartrackerService: CartrackerService) {

  }

  onSubmit() {
    this.cartrackerService.createTracker().subscribe((result) => {
      // console.log(result);
      location.reload();
    });
  }




}
