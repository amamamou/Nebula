import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moon } from 'src/app/models/moon.model';

@Injectable({
  providedIn: 'root'
})
export class MoonService {
  private apiUrl = 'http://localhost:8081/api/moons'; // Your API URL

  constructor(private http: HttpClient) {}

  getMoons(): Observable<Moon[]> {
    return this.http.get<Moon[]>(this.apiUrl);
  }

  createMoon(moon: Moon): Observable<Moon> {
    return this.http.post<Moon>(this.apiUrl, moon);
  }

  updateMoon(moon: Moon): Observable<Moon> {
    return this.http.put<Moon>(`${this.apiUrl}/${moon.id}`, moon);
  }

  deleteMoon(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
