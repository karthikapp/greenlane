import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router , NavigationEnd} from '@angular/router';
import { isPlatformBrowser} from '@angular/common';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
  constructor(private router: Router,private http: Http,@Inject(PLATFORM_ID) private platformId: Object)
  {


  }

  ngAfterViewInit()   
  {

  }



  ngOnInit() {
    this.http.get("http://api.ipstack.com/27.5.188.13?access_key=a58a667bf3bb09d14957b0077bff7d20").subscribe(response => {
      console.log("response", response.json())
    })
    
  }

}
