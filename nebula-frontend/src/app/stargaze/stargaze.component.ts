import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stargaze',
  templateUrl: './stargaze.component.html',
  styleUrls: ['./stargaze.component.css']
})
export class StargazeComponent implements OnInit {
  pictureUrl: string = '';
  hdurl: string = '';
  title: string = ''; // Title from the API (picture title)
  explanation: string = '';
  date: string = '';
  copyright: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAstronomyPicture();
  }

  fetchAstronomyPicture(): void {
    const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=FhX74CnldFADCkgy21oQxqFQwgoevJTs6YUcv0Ro'; // Your API key
    this.http.get<any>(apiUrl).subscribe(data => {
      this.pictureUrl = data.url;
      this.hdurl = data.hdurl;  // Get the high-definition image URL
      this.title = data.title;  // Title of the picture from the API
      this.explanation = data.explanation;
      this.date = data.date;
      this.copyright = data.copyright || 'No copyright information available';  // Handle missing copyright info
    });
  }
}
