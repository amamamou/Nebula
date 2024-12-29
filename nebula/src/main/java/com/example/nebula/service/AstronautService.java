package com.example.nebula.service;

import com.example.nebula.entity.Astronaut;
import com.example.nebula.repository.AstronautRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AstronautService {
    private final AstronautRepository astronautRepository;

    public AstronautService(AstronautRepository astronautRepository) {
        this.astronautRepository = astronautRepository;
    }

    // Get all astronauts
    public List<Astronaut> getAllAstronauts() {
        return astronautRepository.findAll();
    }

    // Get astronaut by ID
    public Optional<Astronaut> getAstronautById(Long id) {
        return astronautRepository.findById(id);
    }

    // Add new astronaut
    public Astronaut addAstronaut(Astronaut astronaut) {
        return astronautRepository.save(astronaut);
    }

    // Update astronaut
    public Astronaut updateAstronaut(Long id, Astronaut astronaut) {
        if (astronautRepository.existsById(id)) {
            astronaut.setId(id);  // Ensure the ID is set before saving
            return astronautRepository.save(astronaut);
        }
        return null;  // Return null if astronaut doesn't exist
    }

    // Delete astronaut
    public boolean deleteAstronaut(Long id) {
        if (astronautRepository.existsById(id)) {
            astronautRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
