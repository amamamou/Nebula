import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PlanetsComponent } from './planets/planets.component';
import { MoonsComponent } from './moons/moons.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AplanetsComponent } from './admin/aplanets/aplanets.component';
import { AstronautComponent } from './admin/astronaut/astronaut.component';
import { AhomeComponent } from './admin/ahome/ahome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PlanetsComponent,
    MoonsComponent,
    PlanetDetailsComponent,
    LoginComponent,
    DashboardComponent,
    AplanetsComponent,
    AstronautComponent,
    AhomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
