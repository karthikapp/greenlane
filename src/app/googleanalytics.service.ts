import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// --- use a declare to allow the compiler find the ga function
declare let ga: Function;
@Injectable({
  providedIn: 'root'
})
export class GoogleanalyticsService {

  constructor(router: Router) 
  {

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.url);
        ga('send', 'pageview')
        console.log("page view added")
      }
    })
  }
}
