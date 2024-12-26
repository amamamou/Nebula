import { Component } from '@angular/core';

@Component({
  selector: 'app-aplanets',
  templateUrl: './aplanets.component.html',
  styleUrls: ['./aplanets.component.css']
})
export class AplanetsComponent {
  planets = [
    { id: 1, name: 'Earth', description: 'Our home planet' },
    { id: 2, name: 'Mars', description: 'The red planet' },
    { id: 3, name: 'Jupiter', description: 'The gas giant' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
