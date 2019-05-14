import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LatLng, MapsAPILoader} from '@agm/core';
import {} from "googlemaps";

declare var google;
var firstRectangle;
var secondRectangle;

@Component({
  selector: 'app-regionselect',
  templateUrl: './regionselect.component.html',
  styleUrls: ['./regionselect.component.css']
})
export class RegionselectComponent implements OnInit {

  @ViewChild("map") public mapElement: ElementRef;
  map: google.maps.Map;

  tax_cost_1: string;
  tax_cost_2: string;
  tax_cost_3: string;


  firstCoords: any;
  secondCoords: any;

  firstRegionNE: LatLng;
  firstRegionSW: LatLng;


  constructor(private mapsAPILoader: MapsAPILoader) {

  }

  ngOnInit() {

    this.firstCoords = {
      north: 51.728078,
      south: 51.367872,
      east: 5.106989,
      west: 4.366204
    };

    this.secondCoords = {
      north: 51.728078,
      south: 51.367872,
      east: 5.106989,
      west: 4.366204
    };

    // var firstCoords = [
    //   {lat: 51.728078, lng: 4.366204},
    //   {lat: 51.728078, lng: 5.106989},
    //   {lat: 51.367872, lng: 4.366204},
    //   {lat: 51.367872, lng: 5.106989}
    // ];

    this.mapsAPILoader.load().then(() => {
      debugger;

      var mapProp = {
        center: new google.maps.LatLng(51.554948, 5.161622),
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(document.getElementById("map"), mapProp);
      firstRectangle = new google.maps.Rectangle({
        bounds: this.firstCoords,
        editable: true,
        draggable: true
      });
      firstRectangle.setMap(this.map);
      firstRectangle.addListener('bounds_changed', this.updateCoords);
    });
  }

  updateCoords(event){
    debugger;
    this.firstRegionNE = firstRectangle.getBounds().getNorthEast();
    console.log(this.firstRegionNE.lat() + " and " + this.firstRegionNE.lng());
  }

  onSubmit(){

  }

}
