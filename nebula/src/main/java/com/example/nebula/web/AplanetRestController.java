package com.example.nebula.web;

import com.example.nebula.entity.Planet;
import com.example.nebula.service.AplanetService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/planetes")
@CrossOrigin(origins = "http://localhost:4200") // Allow CORS for frontend
public class AplanetRestController {

    private final AplanetService aplanetService;

    public AplanetRestController(AplanetService aplanetService) {
        this.aplanetService = aplanetService;
    }

    // Get all planets
    @GetMapping
    public List<Planet> getAllPlanets() {
        return aplanetService.getAllPlanets();
    }

    // Get planet by ID
    @GetMapping("/{id}")
    public ResponseEntity<Planet> getPlanetById(@PathVariable Long id) {
        Optional<Planet> planet = aplanetService.getPlanetById(id);
        return planet.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Add new planet
    @PostMapping
    public Planet addPlanet(@RequestBody Planet planet) {
        return aplanetService.addPlanet(planet);
    }

    // Update planet
    @PutMapping("/{id}")
    public ResponseEntity<Planet> updatePlanet(@PathVariable Long id, @RequestBody Planet planet) {
        Planet updatedPlanet = aplanetService.updatePlanet(id, planet);
        return updatedPlanet != null ? ResponseEntity.ok(updatedPlanet) : ResponseEntity.notFound().build();
    }

    // Delete planet
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlanet(@PathVariable Long id) {
        return aplanetService.deletePlanet(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
