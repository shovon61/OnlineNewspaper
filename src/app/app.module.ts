import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BusinessComponent } from './business/business.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SportsComponent } from './sports/sports.component';
import { TechnewsComponent } from './technews/technews.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsapiserviceService } from './service/newsapiservice.service';

@NgModule({
  declarations: [
    AppComponent,
    BusinessComponent,
    NavbarComponent,
    SportsComponent,
    TechnewsComponent,
    EntertainmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
