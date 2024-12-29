import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet.model';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-aplanets',
  templateUrl: './aplanets.component.html',
  styleUrls: ['./aplanets.component.css']
})
export class AplanetsComponent implements OnInit {
  planets: Planet[] = [];
  newPlanet: Planet = { id: null, name: '', mass: null, type: 'TERRESTRIAL' };
  editingPlanet: Planet | null = null;

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets(): void {
    this.planetService.getAllPlanets().subscribe((planets: Planet[]) => this.planets = planets);
  }

  savePlanet(): void {
    if (this.editingPlanet) {
      this.planetService.updatePlanet(this.editingPlanet.id!, this.newPlanet).subscribe(updatedPlanet => {
        const index = this.planets.findIndex(planet => planet.id === updatedPlanet.id);
        this.planets[index] = updatedPlanet;
        this.resetForm();
      });
    } else {
      this.planetService.addPlanet(this.newPlanet).subscribe(addedPlanet => {
        this.planets.push(addedPlanet);
        this.resetForm();
      });
    }
  }

  editPlanet(planet: Planet): void {
    this.editingPlanet = planet;
    this.newPlanet = { ...planet };
  }

  resetForm(): void {
    this.newPlanet = { id: null, name: '', mass: null, type: 'TERRESTRIAL' };
    this.editingPlanet = null;
  }

  deletePlanet(id: number | null): void {
    if (id !== null) {
      this.planetService.deletePlanet(id).subscribe(() => {
        this.planets = this.planets.filter(planet => planet.id !== id);
      });
    }
  }
}
