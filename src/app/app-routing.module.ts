import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InterestsComponent } from './interests/interests.component';
import { InterestsKarComponent } from './interests-kar/interests-kar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
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

{ path: '',
redirectTo: '/home',
pathMatch: 'full'
},
{ path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
