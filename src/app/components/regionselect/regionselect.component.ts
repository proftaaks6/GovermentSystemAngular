import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LatLng, MapsAPILoader} from '@agm/core';
import {} from "googlemaps";
import {Region} from "../../models/region.model";
import {RegionService} from "../../shared/services/region.service";
import {HttpResponse} from "@angular/common/http";

declare var google;
var firstRectangle;

@Component({
  selector: 'app-regionselect',
  templateUrl: './regionselect.component.html',
  styleUrls: ['./regionselect.component.css']
})
export class RegionselectComponent implements OnInit {
  @ViewChild("map") public mapElement: ElementRef;
  map: google.maps.Map;

  regions: Region[] = [];

  tax_cost_1: number;
  tax_cost_2: number;
  tax_cost_3: number;
  tax_cost_4: number;

  firstCoords: any;

  firstRegionNE: LatLng;
  firstRegionSW: LatLng;

  secondRegionNE: LatLng;
  secondRegionSW: LatLng;

  thirdRegionNE: LatLng;
  thirdRegionSW: LatLng;

  fourthRegionNE: LatLng;
  fourthRegionSW: LatLng;

  constructor(private mapsAPILoader: MapsAPILoader, private regionService: RegionService) {

  }

  ngOnInit() {

    this.firstCoords = {
      north: 51.728078,
      south: 51.367872,
      east: 5.106989,
      west: 4.366204
    };

    //Initialize the map at given coordinates.
    this.mapsAPILoader.load().then(() => {
      var mapProp = {
        center: new google.maps.LatLng(51.554948, 5.161622),
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(document.getElementById("map"), mapProp);
      firstRectangle = new google.maps.Rectangle({
        bounds: this.firstCoords,
        editable: true,
        draggable: true,
        fillColor: 'grey',
        strokeColor: 'darkblue'
      });
      firstRectangle.setMap(this.map);

      //Optional listener
      //firstRectangle.addListener('bounds_changed', this.updateCoords);
    });
  }

  //Optional listener event
  // updateCoords(event){
  //   debugger;
  //   this.firstRegionNE = firstRectangle.getBounds().getNorthEast();
  //   console.log(this.firstRegionNE.lat() + " and " + this.firstRegionNE.lng());
  // }

  setCoords(regionNr){
    switch(regionNr){
      case 1: {
        this.firstRegionNE = firstRectangle.getBounds().getNorthEast();
        this.firstRegionSW = firstRectangle.getBounds().getSouthWest();
        break;
      }
      case 2: {
        this.secondRegionNE = firstRectangle.getBounds().getNorthEast();
        this.secondRegionSW = firstRectangle.getBounds().getSouthWest();
        break;
      }
      case 3: {
        this.thirdRegionNE = firstRectangle.getBounds().getNorthEast();
        this.thirdRegionSW = firstRectangle.getBounds().getSouthWest();
        break;
      }
      case 4: {
        this.fourthRegionNE = firstRectangle.getBounds().getNorthEast();
        this.fourthRegionSW = firstRectangle.getBounds().getSouthWest();
        break;
      }
    }
  }

  onSubmit(){
    debugger;

    //Push regions into array and send to endpoint.
    this.regions.push(new Region(this.firstRegionNE, this.firstRegionSW, this.tax_cost_1));
    this.regions.push(new Region(this.secondRegionNE, this.secondRegionSW, this.tax_cost_2));
    this.regions.push(new Region(this.thirdRegionNE, this.thirdRegionSW, this.tax_cost_3));
    this.regions.push(new Region(this.fourthRegionNE, this.fourthRegionSW, this.tax_cost_4));

    this.regionService.setRegions(this.regions);

    //Clear list afterwards.
    this.regions = [];
  }

}
