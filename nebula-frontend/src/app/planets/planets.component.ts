import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: any[] = []; // Array to hold planets data

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch planets from the local Spring Boot API
    this.http.get<any>('http://localhost:8081/api/planets').subscribe(
      (data) => {
        // Log data to inspect structure
        console.log('Full data:', data);

        // Filter planets based on the expected names using englishName
        this.planets = (data.bodies || data).filter((body: any) =>
          ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'].includes(body.englishName)
        );

        console.log('Filtered planets:', this.planets); // Log the filtered planets
      },
      (error) => {
        console.error('Error fetching planets data', error);
      }
    );
  }
}
