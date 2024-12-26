import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showNavbar = true;

  constructor(private router: Router) {
    // Listen for router events to control visibility based on the URL
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Show the navbar only if the URL does not include 'admin'
      this.showNavbar = !this.router.url.includes('admin');
    });
  }
}
