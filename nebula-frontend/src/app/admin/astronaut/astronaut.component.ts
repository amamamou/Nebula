import { Component } from '@angular/core';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent {
  astronauts = [
    { id: 1, name: 'Neil Armstrong', description: 'First person to walk on the moon' },
    { id: 2, name: 'Yuri Gagarin', description: 'First human in space' },
    { id: 3, name: 'Sally Ride', description: 'First American woman in space' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
