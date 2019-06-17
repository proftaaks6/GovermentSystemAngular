import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LatLng, MapsAPILoader } from '@agm/core';
import { Region } from "../../models/region.model";
import { RegionService } from "../../shared/services/region.service";
import { HttpResponse } from "@angular/common/http";
import {forEach} from "@angular/router/src/utils/collection";

declare var google;

@Component({
  selector: 'app-regionselect',
  templateUrl: './regionselect.component.html',
  styleUrls: ['./regionselect.component.css']
})
export class RegionselectComponent implements OnInit {
  map: google.maps.Map;

  regions: Region[] = [];
  rectangles: Map<Region, google.maps.Rectangle> = new Map();
  colors = ["darkblue", "red", "orange", "purple", "green"];

  selectedRegionIndex: number;
  selectedRegion: Region;
  temporaryRectangle: google.maps.Rectangle;

  // Reference to type to call static functions
  Region = Region;

  error = false;
  success = false;

  constructor(private mapsAPILoader: MapsAPILoader, private regionService: RegionService) {

  }

  async ngOnInit() {
    //Initialize the map at given coordinates.
    this.mapsAPILoader.load().then(async () => {
      var mapProp = {
        center: new google.maps.LatLng(51.554948, 5.161622),
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(document.getElementById("map"), mapProp);

      //Get existing regions if any.
      this.regions = await this.getRegions();
      if (this.regions.length > 0) {
        this.setRectanglesForRegions();
      }
    });
  }

  editRegion(region: Region) {
    if (region.deleted) {
      return;
    }

    this.rectangles.forEach(rectangle => {
      rectangle.setEditable(false);
      rectangle.setDraggable(false);
    });

    if (this.selectedRegion == region) {
      this.selectedRegion = null;
      this.selectedRegionIndex = null;
      return;
    };

    this.selectedRegionIndex = this.regions.indexOf(region);
    this.selectedRegion = region;
    let rectangle = this.rectangles.get(region);
    rectangle.setEditable(true);
    rectangle.setDraggable(true);

    this.rectangles.set(region, rectangle);

    this.setCoords();
  }

  addRegion() {
    let center = this.map.getCenter();

    let region: Region = new Region();
    region.color = this.colors[this.rectangles.size % this.colors.length];
    region.taxRate = 0;
    region.topLeftLat = center.lat() + 0.1;
    region.topLeftLong = center.lng() + 0.1;
    region.bottomRightLat = center.lat() - 0.1;
    region.bottomRightLong = center.lng() - 0.1;

    this.regions.push(region);
    this.createRectangle(region);
    this.editRegion(region);
  }

  setCoords = () => {
    let rectangle: google.maps.Rectangle;
    if (this.selectedRegion) {
      rectangle = this.rectangles.get(this.selectedRegion);
    } else {
      rectangle = this.temporaryRectangle;
    }
    let regionNE = rectangle.getBounds().getNorthEast();
    let regionSW = rectangle.getBounds().getSouthWest();

    this.selectedRegion.topLeftLat = regionNE.lat();
    this.selectedRegion.topLeftLong = regionNE.lng();
    this.selectedRegion.bottomRightLat = regionSW.lat();
    this.selectedRegion.bottomRightLong = regionSW.lng();
  };

  async saveRegions() {
    this.error = false;
    this.success = false;

    if(this.selectedRegion){
      this.editRegion(this.selectedRegion);
    }

    await this.regionService.saveRegions(this.regions.filter(region => !region.deleted)).then(regions => {
      this.success = true;
      this.regions = regions;
      this.setRectanglesForRegions();
    }).catch( x=>{
      this.error = true;
    });
  }

  async getRegions(){
    return await this.regionService.getRegions();
  }

  private createRectangle(region: Region) {
    let coords = {
      north: region.topLeftLat,
      south: region.bottomRightLat,
      east: region.topLeftLong,
      west: region.bottomRightLong
    };
    
    let rectangle = new google.maps.Rectangle({
      bounds: coords,
      editable: false,
      draggable: false,
      fillColor: 'grey',
      strokeColor: region.color
    });
    
    // Add listener so that when rectangle is editable it is already set
    rectangle.addListener('bounds_changed', this.setCoords);
    rectangle.setMap(this.map);
    
    this.rectangles.set(region, rectangle);
  }

  setRectanglesForRegions() {
    this.rectangles.forEach(rectangle => rectangle.setVisible(false));
    this.rectangles = new Map();
    if (this.temporaryRectangle) {
      this.temporaryRectangle.setVisible(false);
      this.temporaryRectangle = undefined;
    }
    this.regions.forEach((region, i) => {
      region.color = this.colors[i % this.colors.length];
      this.createRectangle(region);
    })
  }

  async onDeleteClick(event, region: Region){
    event.stopPropagation();

    if (this.selectedRegion == region) {
      this.selectedRegion = null;
      this.selectedRegionIndex = null;
    }

    region.deleted = !region.deleted;
    let rectangle = this.rectangles.get(region);
    rectangle.setVisible(!region.deleted);
  }
}
