import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'planets', component: PlanetsComponent },
  { path: 'planet/:id', component: PlanetDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/dashboard', component: DashboardComponent }, // Default route for admin section





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
