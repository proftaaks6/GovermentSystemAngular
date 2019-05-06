import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-routemap',
  templateUrl: './routemap.component.html',
  styleUrls: ['./routemap.component.css']
})
export class RoutemapComponent implements OnInit {

  @Input() locations;

  lat: number = 52.092876;
  long: number = 5.104480;
  zoom: number = 7;

  constructor() {
  }

  ngOnInit() {
  }

}
