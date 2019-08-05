import { Component, OnInit } from '@angular/core';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular-6-social-login';
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public useremail: any;
	public userid: any;
	public userimage: any;
	public username: any

  constructor(private socialAuthService: AuthService,private router: Router) { }

  public socialSignIn(socialPlatform : string) 
  {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.useremail = userData.email
        this.userid = userData.id
        this.userimage = userData.image
        this.username = userData.name

        let navigationExtras: NavigationExtras = {
            queryParams: {
            	"useremail":this.useremail,
            	"userid": this.userid,
            	"userimage":this.userimage ,
            	"username": this.username
               
            }
        };
        this.router.navigate(["interests"], navigationExtras);
  
      }
    );
  }

  ngOnInit() 
  {
  }

}
