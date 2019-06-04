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

  async ngOnInit() {

    //Get existing regions if any.
    this.regions = await this.getRegions();

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

  setCoords(regionNr) {
    switch (regionNr) {
      case 1: {
        this.firstRegionNE = firstRectangle.getBounds().getNorthEast();
        this.firstRegionSW = firstRectangle.getBounds().getSouthWest();
        document.getElementById("topLeft1").innerText = "lng" + (Math.round(this.firstRegionNE.lng()*1000)/1000).toString() + "/lat" + (Math.round(this.firstRegionNE.lat()*1000)/1000).toString();
        document.getElementById("bottomRight1").innerText = "lng" + (Math.round(this.firstRegionSW.lng()*1000)/1000).toString() + "/lat" + (Math.round(this.firstRegionSW.lat()*1000)/1000).toString();
        break;
      }
      case 2: {
        this.secondRegionNE = firstRectangle.getBounds().getNorthEast();
        this.secondRegionSW = firstRectangle.getBounds().getSouthWest();
        document.getElementById("topLeft2").innerText = "lng" + (Math.round(this.secondRegionNE.lng()*1000)/1000).toString() + "/lat" + (Math.round(this.secondRegionNE.lat()*1000)/1000).toString();
        document.getElementById("bottomRight2").innerText = "lng" + (Math.round(this.secondRegionSW.lng()*1000)/1000).toString() + "/lat" + (Math.round(this.secondRegionSW.lat()*1000)/1000).toString();
        break;
      }
      case 3: {
        this.thirdRegionNE = firstRectangle.getBounds().getNorthEast();
        this.thirdRegionSW = firstRectangle.getBounds().getSouthWest();
        document.getElementById("topLeft3").innerText = "lng" + (Math.round(this.thirdRegionNE.lng()*1000)/1000).toString() + "/lat" + (Math.round(this.thirdRegionNE.lat()*1000)/1000).toString();
        document.getElementById("bottomRight3").innerText = "lng" + (Math.round(this.thirdRegionSW.lng()*1000)/1000).toString() + "/lat" + (Math.round(this.thirdRegionSW.lat()*1000)/1000).toString();
        break;
      }
      case 4: {
        this.fourthRegionNE = firstRectangle.getBounds().getNorthEast();
        this.fourthRegionSW = firstRectangle.getBounds().getSouthWest();
        document.getElementById("topLeft4").innerText = "lng" + (Math.round(this.fourthRegionNE.lng()*1000)/1000).toString() + "/lat" + (Math.round(this.fourthRegionNE.lat()*1000)/1000).toString();
        document.getElementById("bottomRight4").innerText = "lng" + (Math.round(this.fourthRegionSW.lng()*1000)/1000).toString() + "/lat" + (Math.round(this.fourthRegionSW.lat()*1000)/1000).toString();
        break;
      }
    }
  }

  onSubmit() {
    debugger;
    if(document.getElementById("regionId").innerHTML != ""){
      //Push regions into array and send to endpoint.
      this.newRegion = new Region(Number.parseInt(document.getElementById("regionId").innerHTML), this.firstRegionNE.lat(), this.firstRegionNE.lng(), this.firstRegionSW.lat(), this.firstRegionSW.lng(), this.tax_cost_1);
    }else{
      //Push regions into array and send to endpoint. undefined Id
      this.newRegion = new Region(undefined, this.firstRegionNE.lat(), this.firstRegionNE.lng(), this.firstRegionSW.lat(), this.firstRegionSW.lng(), this.tax_cost_1);
    }
    // this.regions.push(new Region(this.secondRegionNE, this.secondRegionSW, this.tax_cost_2));
    // this.regions.push(new Region(this.thirdRegionNE, this.thirdRegionSW, this.tax_cost_3));
    // this.regions.push(new Region(this.fourthRegionNE, this.fourthRegionSW, this.tax_cost_4));

    this.regionService.addRegion(this.newRegion);

    //Clear region afterwards.
    this.newRegion = null;
    document.getElementById("regionId").innerHTML = "";
  }

  showRegion(region){
    debugger;

    document.getElementById("regionId").innerHTML = region.id;

    window.scrollTo(0,document.body.scrollHeight);

    this.firstCoords = {
      north: region.topLeftLat,
      south: region.bottomRightLat,
      east: region.topLeftLong,
      west: region.bottomRightLong
    };

    firstRectangle = new google.maps.Rectangle({
      bounds: this.firstCoords,
      editable: true,
      draggable: true,
      fillColor: 'grey',
      strokeColor: 'darkblue'
    });

    var mapProp = {
      center: new google.maps.LatLng(51.554948, 5.161622),
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(document.getElementById("map"), mapProp);
    firstRectangle.setMap(this.map);

    this.setCoords(1);
  }

  async getRegions(){
    return await this.regionService.getRegions();
  }

  addRegion(){
    if(document.getElementById("region2").classList.contains("hidden")){
        document.getElementById("region2").classList.toggle("hidden");
        return;
    }else if(document.getElementById("region3").classList.contains("hidden")){
      document.getElementById("region3").classList.toggle("hidden");
      return;
    }else if(document.getElementById("region4").classList.contains("hidden")){
      document.getElementById("region4").classList.toggle("hidden");
      document.getElementById("addRegion").classList.add("hidden");
      return;
    }
  }

  async onDeleteClick(){
    debugger;
    if(document.getElementById("regionId").innerHTML == ""){
      alert("No region is currently selected, please select one from the list on the right.")
      return;
    }else{
      await this.regionService.deleteRegion(+document.getElementById("regionId").innerHTML);
    }
  }

}
