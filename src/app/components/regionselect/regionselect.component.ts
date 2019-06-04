import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LatLng, MapsAPILoader } from '@agm/core';
import { Map } from "googlemaps";
import { Region } from "../../models/region.model";
import { RegionService } from "../../shared/services/region.service";
import { HttpResponse } from "@angular/common/http";
import {forEach} from "@angular/router/src/utils/collection";

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

  newRegion: Region;

  firstRectangle: any;

  selectedRegion: number;

  tax_cost_1: number;

  firstRegionNE: LatLng;
  firstRegionSW: LatLng;

  topLeft : string;
  bottomRight: string;

  error = false;
  success = false;

  constructor(private mapsAPILoader: MapsAPILoader, private regionService: RegionService) {

  }

  async ngOnInit() {

    //Get existing regions if any.
    this.regions = await this.getRegions();

    const coords = {
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
      this.firstRectangle = new google.maps.Rectangle({
        bounds: coords,
        editable: true,
        draggable: true,
        fillColor: 'grey',
        strokeColor: 'darkblue'
      });
      this.firstRectangle.setMap(this.map);

      //Optional listener
      this.firstRectangle.addListener('bounds_changed', this.setCoords);
    });
  }

  setCoords = () => {
        this.firstRegionNE = this.firstRectangle.getBounds().getNorthEast();
        this.firstRegionSW = this.firstRectangle.getBounds().getSouthWest();
        this.topLeft = "lng" + (Math.round(this.firstRegionNE.lng()*1000)/1000).toString() + "/lat" + (Math.round(this.firstRegionNE.lat()*1000)/1000).toString();
        this.bottomRight =  "lng" + (Math.round(this.firstRegionSW.lng()*1000)/1000).toString() + "/lat" + (Math.round(this.firstRegionSW.lat()*1000)/1000).toString();
  };

  async onSubmit() {
    if(this.selectedRegion){
      //Push regions into array and send to endpoint.
      this.newRegion = new Region(this.selectedRegion, this.firstRegionNE.lat(), this.firstRegionNE.lng(), this.firstRegionSW.lat(), this.firstRegionSW.lng(), this.tax_cost_1);
    }else{
      //Push regions into array and send to endpoint. undefined Id
      this.newRegion = new Region(-1, this.firstRegionNE.lat(), this.firstRegionNE.lng(), this.firstRegionSW.lat(), this.firstRegionSW.lng(), this.tax_cost_1);
    }

    await this.regionService.addRegion(this.newRegion).then(x=> {
      this.error = false;
      this.success = true;
    }).catch( x=>{
      this.error = true;
      this.success = false;
    });

    window.scrollTo(0,0);

    //Get existing regions if any.
    this.regions = await this.getRegions();

    //Clear region afterwards.
    this.newRegion = null;
  }

  showRegion(region){
    if(region.id === this.selectedRegion){
      this.selectedRegion = undefined;
      return;
    }
    this.selectedRegion = region.id;

    window.scrollTo(0,document.body.scrollHeight);

    const coords = {
      north: region.topLeftLat,
      south: region.bottomRightLat,
      east: region.topLeftLong,
      west: region.bottomRightLong
    };

    var mapProp = {
      center: new google.maps.LatLng(51.554948, 5.161622),
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.firstRectangle.setBounds(coords);
    //this.map = new google.maps.Map(document.getElementById("map"), mapProp);

    this.setCoords();
  }

  async getRegions(){
    return await this.regionService.getRegions();
  }

  async onDeleteClick(id){
    if(!this.selectedRegion){
      alert("No region is currently selected, please select one from the list on the right.")
      return;
    }else{
      await this.regionService.deleteRegion(id).then(async x=> {
        this.regions = await this.getRegions();
        this.error = false;
        this.success = true;
      }).catch( x=>{
        this.error = true;
        this.success = false;
      });
    }
  }

}
