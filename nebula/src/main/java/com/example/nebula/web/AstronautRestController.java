package com.example.nebula.web;

import com.example.nebula.entity.Astronaut;
import com.example.nebula.service.AstronautService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/astronauts")
@CrossOrigin(origins = "http://localhost:4200")
public class AstronautRestController {

    private final AstronautService astronautService;

    public AstronautRestController(AstronautService astronautService) {
        this.astronautService = astronautService;
    }

    // Get all astronauts
    @GetMapping
    public List<Astronaut> getAllAstronauts() {
        return astronautService.getAllAstronauts();
    }

    // Get astronaut by ID
    @GetMapping("/{id}")
    public ResponseEntity<Astronaut> getAstronautById(@PathVariable Long id) {
        Optional<Astronaut> astronaut = astronautService.getAstronautById(id);
        return astronaut.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Add new astronaut
    @PostMapping
    public ResponseEntity<Astronaut> addAstronaut(@RequestBody Astronaut astronaut) {
        Astronaut newAstronaut = astronautService.addAstronaut(astronaut);
        return ResponseEntity.ok(newAstronaut);  // Return the newly created astronaut
    }

    // Update astronaut
    @PutMapping("/{id}")
    public ResponseEntity<Astronaut> updateAstronaut(@PathVariable Long id, @RequestBody Astronaut astronaut) {
        Astronaut updatedAstronaut = astronautService.updateAstronaut(id, astronaut);
        return updatedAstronaut != null ? ResponseEntity.ok(updatedAstronaut) : ResponseEntity.notFound().build();
    }

    // Delete astronaut
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAstronaut(@PathVariable Long id) {
        return astronautService.deleteAstronaut(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
