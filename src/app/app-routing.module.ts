import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
  { path:'',component:NavbarComponent},
  { path:'tech',component:TechnewsComponent},
  { path:'business',component:BusinessComponent},
  { path:'entertain',component:EntertainmentComponent},
  { path:'sports',component:SportsComponent},
  { path:'health',component:HealthComponent},
  { path:'science',component:ScienceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
