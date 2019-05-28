import { Component, OnInit } from '@angular/core';
import {Vehicle} from "../../../shared/models/vehicle.model";
import {VehicleService} from "../../../shared/services/vehicle.service";
import {RegionService} from "../../../shared/services/region.service";
import {HttpErrorResponse} from "@angular/common/http";
import {JsonVehicle} from "../../../shared/models/jsonvehicle.model";

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  type: string;
  chassis_number: string;
  fuel: string;
  emission: string;

  constructor(private service: VehicleService) {}

  ngOnInit() {
  }

  onSubmit() {
    debugger;
    var vehicle: JsonVehicle = {
      id: null,
      vehicleType: "",
      chassisNumber: "",
      fuelType: "",
      emission: ""
    };

    vehicle.vehicleType = this.type;
    vehicle.chassisNumber = this.chassis_number;
    vehicle.fuelType = this.fuel;
    vehicle.emission = this.emission;

    if (vehicle.emission != null && vehicle.fuelType != null && vehicle.chassisNumber != null && vehicle.vehicleType != null) {
      this.service.addVehicle(vehicle).catch((err: HttpErrorResponse) => {
        alert("We ran into a problem while trying to add your vehicle, try again later.")
      });
    }
  }
}
