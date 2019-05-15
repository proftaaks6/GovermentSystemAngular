import { Component, OnInit } from '@angular/core';
import {VehicleService} from "../../../shared/services/vehicle.service";
import {Vehicle} from "../../../shared/models/vehicle.model";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RoutemapComponent} from "../routemap/routemap.component";
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
@Component({
  selector: 'app-show-vehicles',
  templateUrl: './show-vehicles.component.html',
  styleUrls: ['./show-vehicles.component.css']
})
export class ShowVehiclesComponent implements OnInit {

  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService, private modalService: NgbModal) {
  }


  async ngOnInit() {
    // @ts-ignore
    this.vehicles = await this.getVehicles();
    console.log(this.vehicles);
  }

  async getVehicles() {
    return await this.vehicleService.getVehicles();
  }

  async showRoute(vehicle: Vehicle) {
    const modal = this.modalService.open(RoutemapComponent);

    modal.componentInstance.locations = await this.vehicleService.getLocationPointsOfTracker(vehicle.tracker.id || 5);
  }
}

