package com.example.nebula.service;

import com.example.nebula.entity.Planet;
import com.example.nebula.repository.PlanetRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AplanetService {
    private final PlanetRepository planetRepository;

    public AplanetService(PlanetRepository planetRepository) {
        this.planetRepository = planetRepository;
    }

    // Get all planets
    public List<Planet> getAllPlanets() {
        return planetRepository.findAll();
    }

    // Get planet by ID
    public Optional<Planet> getPlanetById(Long id) {
        return planetRepository.findById(id);
    }

    // Add a new planet
    public Planet addPlanet(Planet planet) {
        return planetRepository.save(planet);
    }

    // Update a planet
    public Planet updatePlanet(Long id, Planet planet) {
        if (planetRepository.existsById(id)) {
            planet.setId(id);
            return planetRepository.save(planet);
        }
        return null;
    }

    // Delete a planet
    public boolean deletePlanet(Long id) {
        if (planetRepository.existsById(id)) {
            planetRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
