import {LatLng} from "@agm/core";

export class Region {
  topLeft: LatLng;
  bottomRight: LatLng;
  taxRate: number;

  constructor(topLeft: LatLng, bottomRight: LatLng, taxRate: number){
    this.topLeft = topLeft;
    this.bottomRight = bottomRight;
    this.taxRate = taxRate;
  }
}
