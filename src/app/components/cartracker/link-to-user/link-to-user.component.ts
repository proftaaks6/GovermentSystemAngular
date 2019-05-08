import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';
import { ClientUser } from 'src/app/shared/models/clientUser';
import { UserService } from 'src/app/shared/services/user.service';
import { VehicleService } from 'src/app/shared/services/vehicle.service';

@Component({
  selector: 'app-link-to-user',
  templateUrl: './link-to-user.component.html',
  styleUrls: ['./link-to-user.component.css']
})
export class LinkToUserComponent implements OnInit {

  vehicles: Vehicle[];
  users: ClientUser[];

  selectedVehicleId: number;
  selectedUserId: number;

  success = false;
  error = false;

  constructor(private userService: UserService,
    private vehicleService: VehicleService) { }

  async ngOnInit() {
    // Load cars and users
    // @ts-ignore
    this.vehicles = this.vehicleService.getVehicles();
    this.users = await this.userService.getAll();
  }

  async onSubmit() {
    if (!(this.selectedUserId && this.selectedVehicleId)) {
      // Form not filled
      this.error = true;
      return;
    }

    this.success = false;
    this.error = false;
    
    if (await this.vehicleService.linkUserToVehicle(this.selectedUserId, this.selectedVehicleId)) {
      this.selectedUserId = undefined;
      this.selectedVehicleId = undefined;
      this.success = true;
    } else {
      this.error = true;
    }
  }
}
