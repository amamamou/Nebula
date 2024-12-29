package com.example.nebula.service;

import com.example.nebula.entity.Moon;
import com.example.nebula.entity.Planet;
import com.example.nebula.repository.MoonRepository;
import com.example.nebula.repository.PlanetRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class MoonService {
    private final MoonRepository moonRepository;
    private final PlanetRepository planetRepository;  // Add PlanetRepository for handling planet associations

    public MoonService(MoonRepository moonRepository, PlanetRepository planetRepository) {
        this.moonRepository = moonRepository;
        this.planetRepository = planetRepository;
    }

    public List<Moon> getAllMoons() {
        return moonRepository.findAll();
    }

    @Transactional
    public Moon createMoon(Moon moon) {
        return moonRepository.save(moon);
    }

    @Transactional
    public Moon updateMoon(Long id, Moon updatedMoon) {
        Optional<Moon> existingMoon = moonRepository.findById(id);
        if (existingMoon.isPresent()) {
            Moon moon = existingMoon.get();
            moon.setName(updatedMoon.getName());
            moon.setDiameter(updatedMoon.getDiameter());
            moon.setHasRings(updatedMoon.getHasRings());

            // Check if planet is provided in the update request and set it
            if (updatedMoon.getPlanet() != null) {
                Optional<Planet> planet = planetRepository.findById(updatedMoon.getPlanet().getId());
                planet.ifPresent(moon::setPlanet);  // Set the planet if it exists
            }

            return moonRepository.save(moon);
        }
        return null; // Return null or throw an exception if not found
    }

    @Transactional
    public void deleteMoon(Long id) {
        moonRepository.deleteById(id);
    }
}
