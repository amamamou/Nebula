// src/app/services/planet.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private apiUrl = 'http://localhost:8081/api/planetes'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  // Get all planets
  getAllPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.apiUrl);
  }

  // Get planet by ID
  getPlanetById(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${this.apiUrl}/${id}`);
  }

  // Add new planet
  addPlanet(planet: Planet): Observable<Planet> {
    return this.http.post<Planet>(this.apiUrl, planet);
  }

  // Update planet
  updatePlanet(id: number, planet: Planet): Observable<Planet> {
    return this.http.put<Planet>(`${this.apiUrl}/${id}`, planet);
  }

  // Delete planet
  deletePlanet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
