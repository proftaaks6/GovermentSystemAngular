import {LatLng} from "@agm/core";

export class Region {
  id?: number;
  topLeftLat: number;
  topLeftLong: number;
  bottomRightLat: number;
  bottomRightLong: number;
  taxRate: number;
  color: string;
  deleted: boolean = false;

  constructor() {}

  public static getTopLeftString(region: Region) {
    return (Math.round(region.topLeftLat*1000)/1000).toString()+"/"+(Math.round(region.topLeftLong*1000)/1000).toString();
  }

  public static  getBottomRightString(region: Region) {
    return (Math.round(region.bottomRightLat*1000)/1000).toString()+"/"+(Math.round(region.bottomRightLong*1000)/1000).toString();
  }
}
