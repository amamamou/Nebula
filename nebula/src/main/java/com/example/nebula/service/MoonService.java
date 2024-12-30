package com.example.nebula.service;

import com.example.nebula.entity.Moon;
import com.example.nebula.repository.MoonRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MoonService {

    private final MoonRepository moonRepository;

    public MoonService(MoonRepository moonRepository) {
        this.moonRepository = moonRepository;
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
        Moon existingMoon = moonRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Moon not found with ID: " + id));

        existingMoon.setName(updatedMoon.getName());
        existingMoon.setDiameter(updatedMoon.getDiameter());
        existingMoon.setHasRings(updatedMoon.getHasRings());

        return moonRepository.save(existingMoon);
    }

    @Transactional
    public void deleteMoon(Long id) {
        if (!moonRepository.existsById(id)) {
            throw new IllegalArgumentException("Moon not found with ID: " + id);
        }
        moonRepository.deleteById(id);
    }
}
