export class Moon {
  id?: number;  // Optional because the ID will be generated by the backend
  name: string;
  diameter: number;  // Diameter in kilometers
  hasRings: boolean;  // Whether the moon has rings
  planetId: number;  // The ID of the planet the moon orbits

  constructor(
    name: string = '',
    diameter: number = 0,
    hasRings: boolean = false,
    planetId: number = 0
  ) {
    this.name = name;
    this.diameter = diameter;
    this.hasRings = hasRings;
    this.planetId = planetId;
  }
}
