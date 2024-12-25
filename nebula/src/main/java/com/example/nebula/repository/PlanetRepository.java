package com.example.nebula.repository;

import com.example.nebula.entity.Planet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanetRepository extends JpaRepository<Planet, Long> {
    // You can define custom query methods here if needed
}