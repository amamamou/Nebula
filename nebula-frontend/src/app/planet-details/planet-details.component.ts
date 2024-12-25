import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {
  planet: any; // To hold the planet details
  planetId: string = ''; // Default empty string

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Get the planet ID from the route
    this.planetId = this.route.snapshot.paramMap.get('id')!;

    // Fetch the planet details from the API
    this.http.get(`http://localhost:8081/api/planets/${this.planetId}`).subscribe(
      (data) => {
        this.planet = data;
      },
      (error) => {
        console.error('Error fetching planet details:', error);
      }
    );
  }
}
