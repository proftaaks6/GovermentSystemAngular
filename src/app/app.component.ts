import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GovermentSystemAngular';
  // private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) { }
  // get isLoggedIn() {
  //   return this.loggedIn.asObservable(); // {2}
  // }

  ngOnInit() {
    // if (localStorage.getItem('currentUser') !== null) {
    // this.loggedIn.next(true);
    // this.router.navigate(['/']);
    // } else {
    // this.loggedIn.next(false);
    // this.router.navigate(['/login']);

  }
}
