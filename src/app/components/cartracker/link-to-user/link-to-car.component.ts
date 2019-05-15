import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/shared/models/vehicle.model';
import { ClientUser } from 'src/app/shared/models/clientUser.model';
import { UserService } from 'src/app/shared/services/user.service';
import { VehicleService } from 'src/app/shared/services/vehicle.service';
import { Tracker } from 'src/app/shared/models/tracker.model';
import { CartrackerService } from 'src/app/shared/services/cartracker.service';

@Component({
  selector: 'app-link-to-car',
  templateUrl: './link-to-car.component.html',
  styleUrls: ['./link-to-car.component.css']
})
export class LinkToCarComponent implements OnInit {

  vehicles: Vehicle[];
  trackers: Tracker[];

  selectedVehicleId: number;
  selectedTrackerId: number;

  success = false;
  error = false;

  constructor(private userService: UserService,
    private vehicleService: VehicleService,
    private carTrackerService: CartrackerService) { }

  async ngOnInit() {
    // Load cars and users
    // @ts-ignore
    this.vehicles = await this.vehicleService.getVehicles();
    this.trackers = await this.carTrackerService.getAll();
  }

  async onSubmit() {
    console.log(this.selectedTrackerId, this.selectedVehicleId);
    if (!(this.selectedTrackerId && this.selectedVehicleId)) {
      // Form not filled
      this.error = true;
      return;
    }

    this.success = false;
    this.error = false;
    
    if (await this.carTrackerService.linkTrackerToVehicle(this.selectedTrackerId, this.selectedVehicleId)) {
      this.selectedTrackerId = undefined;
      this.selectedVehicleId = undefined;
      this.success = true;
    } else {
      this.error = true;
    }
  }
}
