import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InterestsComponent } from './interests/interests.component';
import { InterestsKarComponent } from './interests-kar/interests-kar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FrameComponent } from './frame/frame.component'
import { NewHomeComponent } from './new-home/new-home.component'
import { LoginComponent } from './login/login.component';
import { IntrestsEditComponent } from './intrests-edit/intrests-edit.component';
import { IframeinterestsComponent } from './iframeinterests/iframeinterests.component';

const routes: Routes = 
[

{
  path: 'home',
  component: HomeComponent,

},
{
  path: 'interests',
  component: InterestsComponent,
},
{
  path: 'interests_k',
  component: InterestsKarComponent,

},
{
  path: 'aboutus',
  component: AboutusComponent,

},

{
  path: 'frame/:category_tag',
  component: FrameComponent,

},
{
  path: 'newhome',
  component: NewHomeComponent,

},
{
  path: 'login',
  component: LoginComponent,

},
{
  path: 'interests_new',
  component: IntrestsEditComponent,

},
{
  path: 'iframe_with_interests',
  component: IframeinterestsComponent,

}
,
{ path: '',
redirectTo: '/newhome',
pathMatch: 'full'
},

{ path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
