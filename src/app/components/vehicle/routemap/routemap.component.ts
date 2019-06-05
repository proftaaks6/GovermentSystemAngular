import {Component, Input, OnInit, OnChanges} from '@angular/core';
import { LatLngLiteral } from '@agm/core';
import { VehicleService } from 'src/app/shared/services/vehicle.service';

@Component({
  selector: 'app-routemap',
  templateUrl: './routemap.component.html',
  styleUrls: ['./routemap.component.css']
})
export class RoutemapComponent implements OnInit, OnChanges {

  @Input() chassis: string;
  @Input() date: string;
  
  paths: Array<LatLngLiteral>;

  lat: number = 52.092876;
  long: number = 5.104480;
  zoom: number = 9;

  constructor(private vehicleService: VehicleService) {
  }

  async ngOnChanges() {
    let minLat, minLong, maxLat, maxLong;
    let didFirst = false;

    let dateValues = this.date.split('-').map(x => +x);

    let points = await this.vehicleService.getLocationPointsOfVehicle(
      this.chassis, 
      new Date(dateValues[0], dateValues[1]-1, dateValues[2]), 
      new Date(dateValues[0], dateValues[1], dateValues[2]));
    this.paths = points.map(x => { return { lat: x.latitude, lng: x.longitude } });

    if (this.paths.length > 0) {
      this.paths.forEach(point => {
        if (!didFirst) {
          minLat = point.lat;
          maxLat = point.lat;
          minLong = point.lng;
          maxLong = point.lng;
          return;
        }

        if (point.lat < minLat) {
          minLat = point.lat;
        }
        if (point.lat > maxLat) {
          maxLat = point.lat;
        }
        if (point.lng < minLong) {
          minLong = point.lng;
        }
        if (point.lng > maxLong) {
          maxLong = point.lng;
        }
      });

      this.long = (minLat + maxLat) / 2;
      this.lat = (minLong + maxLong) / 2;
    }
  }

  ngOnInit() {
  }

}
