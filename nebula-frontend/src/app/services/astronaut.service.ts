import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AstronautService {

  private apiUrl = 'http://localhost:8081/api/astronauts'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  // Get all astronauts
  getAstronauts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Get astronaut by ID
  getAstronautById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Add a new astronaut
  addAstronaut(astronaut: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, astronaut);
  }

  // Update astronaut
  updateAstronaut(id: number, astronaut: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, astronaut);
  }

  // Delete astronaut
  deleteAstronaut(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
