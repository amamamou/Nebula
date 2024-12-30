import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AplanetsComponent } from './admin/aplanets/aplanets.component';
import { AstronautComponent } from './admin/astronaut/astronaut.component';
import { AhomeComponent } from './admin/ahome/ahome.component';
import { AmoonComponent } from './admin/amoon/amoon.component';
import { StargazeComponent } from './stargaze/stargaze.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route for home
  { path: 'planets', component: PlanetsComponent }, // Public planets page
  { path: 'planet/:id', component: PlanetDetailsComponent }, // Planet details page
  { path: 'login', component: LoginComponent }, // Login page
  { path: 'stargaze', component: StargazeComponent }, // Login page

  // Admin routes
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    children: [
      { path: 'planets', component: AplanetsComponent }, // Admin planets management
      { path: 'moons', component: AmoonComponent }, // Admin planets management
      { path: 'astronauts', component: AstronautComponent }, // Admin planets management
      { path: 'home', component: AhomeComponent }, // Admin planets management

      // Add more admin routes here as needed
    ]
  },
  // Redirect to dashboard if no other path matches
  { path: '**', redirectTo: '/admin/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
