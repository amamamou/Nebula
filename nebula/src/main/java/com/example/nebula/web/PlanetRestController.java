package com.example.nebula.web;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Allow CORS for this controller

public class PlanetRestController {

    private final PlanetService planetService;

    public PlanetRestController(PlanetService planetService) {
        this.planetService = planetService;
    }

    // Endpoint to get all planets
    @GetMapping("/api/planets")
    public String getAllPlanets() {
        return planetService.getPlanets();
    }

    // Endpoint to get a specific planet's details
    @GetMapping("/api/planets/{planetId}")
    public String getPlanetDetails(@PathVariable String planetId) {
        return planetService.getPlanetDetails(planetId);
    }
    // Endpoint to get moons of a specific planet by its englishName
    @GetMapping("/api/planets/{planetName}/moons")
    public String getMoonsOfPlanet(@PathVariable String planetName) {
        return planetService.getMoonsOfPlanet(planetName);
    }
}
