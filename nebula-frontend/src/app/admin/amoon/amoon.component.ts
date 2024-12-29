import { Component } from '@angular/core';
import { Moon } from 'src/app/models/moon.model';
import { MoonService } from 'src/app/services/moon.service';

@Component({
  selector: 'app-amoon',
  templateUrl: './amoon.component.html',
  styleUrls: ['./amoon.component.css']
})
export class AmoonComponent {
  moons: Moon[] = [];
  newMoon: Moon = new Moon(); // Object to hold the moon data for add/update

  constructor(private moonService: MoonService) {}

  ngOnInit(): void {
    this.loadMoons();
  }

  loadMoons(): void {
    this.moonService.getMoons().subscribe((moons) => {
      this.moons = moons;
    });
  }

  addMoon(): void {
    this.moonService.createMoon(this.newMoon).subscribe(
      (response) => {
        console.log('Moon added successfully', response);
        this.loadMoons(); // Reload moons after adding
        this.resetForm();
      },
      (error) => {
        console.error('Error adding moon', error);
      }
    );
  }

  openUpdateForm(moon: Moon): void {
    this.newMoon = { ...moon }; // Copy moon data into newMoon for updating
  }

  updateMoon(): void {
    this.moonService.updateMoon(this.newMoon).subscribe(
      (response) => {
        console.log('Moon updated successfully', response);
        this.loadMoons(); // Reload moons after update
        this.resetForm();
      },
      (error) => {
        console.error('Error updating moon', error);
      }
    );
  }

  deleteMoon(id: number): void {
    this.moonService.deleteMoon(id).subscribe(
      (response) => {
        console.log('Moon deleted successfully', response);
        this.loadMoons(); // Reload moons after deletion
      },
      (error) => {
        console.error('Error deleting moon', error);
      }
    );
  }

  // Define the viewMoon method to display details of a moon
  viewMoon(moon: Moon): void {
    console.log('Viewing moon details:', moon);
    // You can implement further logic here, such as opening a modal or navigating to a details page.
  }

  resetForm(): void {
    this.newMoon = new Moon(); // Reset the form after adding or updating
  }
}
