package com.example.nebula.repository;

import com.example.nebula.entity.Astronaut;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AstronautRepository extends JpaRepository<Astronaut, Long> {
}