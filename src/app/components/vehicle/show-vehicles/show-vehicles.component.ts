import { Component, OnInit } from '@angular/core';
import {VehicleService} from "../../../shared/services/vehicle.service";
import {Vehicle} from "../../../shared/models/vehicle.model";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RoutemapComponent} from "../routemap/routemap.component";
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-vehicles',
  templateUrl: './show-vehicles.component.html',
  styleUrls: ['./show-vehicles.component.css']
})
export class ShowVehiclesComponent implements OnInit {

  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService, private router: Router) {
  }


  async ngOnInit() {
    this.vehicles = await this.getVehicles();
  }

  async getVehicles() {
    return await this.vehicleService.getVehicles();
  }

  async showRoute(vehicle: Vehicle) {
    this.router.navigateByUrl("/vehicle/info/"+vehicle.chassisNumber);
  }
}

