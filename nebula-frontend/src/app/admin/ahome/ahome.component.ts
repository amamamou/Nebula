import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.css']
})
export class AhomeComponent implements OnInit {
  planetCount: number = 0;
  astronautCount: number = 0;
  moonCount: number = 0;

  planets: any[] = []; // To store the list of planets
  astronauts: any[] = []; // To store the list of astronauts
  moons: any[] = []; // To store the list of moons

  // Chart.js variables
  public planetChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Mass of Planets (x10^24 kg)',
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1
      }
    ]
  };


  public planetChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      tooltip: {
        enabled: true
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Planets'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Mass (x10^24 kg)'
        },
        beginAtZero: true
      }
    }
  };

  public planetChartType: ChartType = 'bar';

  constructor(private http: HttpClient) {} // Inject HttpClient

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    // Fetch the list of planets from the backend
    this.http.get<any[]>('http://localhost:8081/api/planetes').subscribe(data => {
      this.planets = data;
      this.planetCount = data.length; // Count the number of planets

      // Prepare chart data
      this.planetChartData.labels = data.map(planet => planet.name); // Planet names
      this.planetChartData.datasets[0].data = data.map(planet => planet.mass); // Planet masses
    });

    // Fetch the list of astronauts from the backend
    this.http.get<any[]>('http://localhost:8081/api/astronauts').subscribe(data => {
      this.astronauts = data;
      this.astronautCount = data.length; // Count the number of astronauts
    });

    // Fetch the list of moons from the backend
    this.http.get<any[]>('http://localhost:8081/api/moons').subscribe(data => {
      this.moons = data;
      this.moonCount = data.length; // Count the number of moons
    });
  }
}
