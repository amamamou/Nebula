import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PlanetsComponent } from './planets/planets.component';
import { MoonsComponent } from './moons/moons.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { CometsComponent } from './comets/comets.component';
import { SpacecraftsComponent } from './spacecrafts/spacecrafts.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PlanetsComponent,
    MoonsComponent,
    AsteroidsComponent,
    CometsComponent,
    SpacecraftsComponent,
    PlanetDetailsComponent,
    LoginComponent,
    DashboardComponent
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
