import {LatLng} from "@agm/core";

export class Region {
  id: number;
  topLeftLat: number;
  topLeftLong: number;
  bottomRightLat: number;
  bottomRightLong: number;
  taxRate: number;

  constructor(id: number, topLeftLat: number, topLeftLong: number, bottomRightLat: number, bottomRightLong: number, taxRate: number) {
    this.id = id;
    this.topLeftLat = topLeftLat;
    this.topLeftLong = topLeftLong;
    this.bottomRightLat = bottomRightLat;
    this.bottomRightLong = bottomRightLong;
    this.taxRate = taxRate;
  }
}
