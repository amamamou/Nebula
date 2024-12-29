import { Component, OnInit } from '@angular/core';
import { AstronautService } from 'src/app/services/astronaut.service';

@Component({
  selector: 'app-astronauts',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent implements OnInit {

  astronauts: any[] = [];
  selectedAstronaut: any = null;  // Pour stocker l'astronaute sélectionné
  astronautForm = {
    name: '',
    mission: ''
  };

  constructor(private astronautService: AstronautService) {}

  ngOnInit(): void {
    this.fetchAstronauts();
  }

  fetchAstronauts(): void {
    this.astronautService.getAstronauts().subscribe((data: any) => {
      this.astronauts = data;
    });
  }

  viewAstronaut(id: number): void {
    this.astronautService.getAstronautById(id).subscribe((data: any) => {
      this.selectedAstronaut = data;
      this.astronautForm.name = this.selectedAstronaut.name;
      this.astronautForm.mission = this.selectedAstronaut.mission;
    });
  }

  addAstronaut(): void {
    const newAstronaut = {
      name: this.astronautForm.name,
      mission: this.astronautForm.mission
    };
    this.astronautService.addAstronaut(newAstronaut).subscribe(() => {
      this.fetchAstronauts();
      this.resetForm();
    });
  }

  updateAstronaut(): void {
    const updatedAstronaut = {
      name: this.astronautForm.name,
      mission: this.astronautForm.mission
    };
    this.astronautService.updateAstronaut(this.selectedAstronaut.id, updatedAstronaut).subscribe(() => {
      this.fetchAstronauts();
      this.resetForm();
    });
  }

  deleteAstronaut(id: number): void {
    this.astronautService.deleteAstronaut(id).subscribe(() => {
      this.fetchAstronauts();
    });
  }

  resetForm(): void {
    this.astronautForm = { name: '', mission: '' };
    this.selectedAstronaut = null;
  }
}
