import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InterestsComponent } from './interests/interests.component';
import { InterestsKarComponent } from './interests-kar/interests-kar.component';
import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular-6-social-login";
import { AboutusComponent } from './aboutus/aboutus.component';
 

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("2204403309683197")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("742845928827-0qhkig2pl172fas0us88kmqcdc7i0g33.apps.googleusercontent.com")
        }
      ]
  )
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    InterestsComponent,
    InterestsKarComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [{
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
