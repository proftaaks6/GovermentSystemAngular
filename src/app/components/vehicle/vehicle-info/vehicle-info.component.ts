import { Component, OnInit } from '@angular/core';
import { LatLngLiteral } from '@agm/core';
import { VehicleService } from 'src/app/shared/services/vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent implements OnInit {
  date: string = "2019-06-05";
  chassis: string;

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.chassis = params.chassis;
    });
  }

}
