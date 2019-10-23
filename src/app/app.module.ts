import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InterestsComponent } from './interests/interests.component';
import { InterestsKarComponent } from './interests-kar/interests-kar.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider} from "angular-6-social-login";
import { AboutusComponent } from './aboutus/aboutus.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CoreModule } from './core/core.module'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthService } from './services/auth.service';
import { FrameComponent } from './frame/frame.component';
import { SafePipe } from './safe.pipe';
import { NewHomeComponent } from './new-home/new-home.component'
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyLoadScriptService } from './lazy-load-script.service';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IntrestsEditComponent } from './intrests-edit/intrests-edit.component';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { IframeinterestsComponent } from './iframeinterests/iframeinterests.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { GoogleanalyticsService } from './googleanalytics.service';
import { ButtonDirective } from './button.directive'
import { SegmentModule } from 'ngx-segment-analytics';
import { CategorymobileComponent } from './categorymobile/categorymobile.component';

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
  AboutusComponent,
  FrameComponent,
  SafePipe,
  NewHomeComponent,
  LoginComponent,
  IntrestsEditComponent,
  IframeinterestsComponent,
  ButtonDirective,
  CategorymobileComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  SocialLoginModule,
  FormsModule,
  CoreModule,
  AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
  NgxTypedJsModule,
  AngularFireDatabaseModule,
  AngularFullpageModule,
  AngularFireAuthModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  HttpModule,
  DeviceDetectorModule.forRoot(),
  HttpClientModule, EmbedVideo.forRoot(),
  SegmentModule.forRoot({ apiKey: 'vfmPVEG2MP1uwNhgsDh4qOfkBt59zzUg', debug: true, loadOnInitialization: true })
  ],
  providers: [AuthService,{

    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  },LazyLoadScriptService,AngularFirestore,GoogleanalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(protected _googleAnalyticsService: GoogleanalyticsService) { }

}
