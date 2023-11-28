import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentRouteIsHome = true;
  currentRouteIsImprint = false;
  currentRouteIsPolicy = false;

  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.checkCurrentUrl();
      }
    });
  }

  ngOnInit(): void {
  }

  checkCurrentUrl() {

    if (this.router.url.includes('/imprint')) {
      this.currentRouteIsImprint = true;
    }
    if (this.router.url.includes('/privacypolicy')) {
      this.currentRouteIsPolicy = true;
    }
    if (this.router.url.includes('/privacypolicy') || this.router.url.includes('/imprint')) {
      this.currentRouteIsHome = false;
    }

  }

}
