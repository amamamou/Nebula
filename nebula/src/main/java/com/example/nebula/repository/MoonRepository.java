package com.example.nebula.repository;

import com.example.nebula.entity.Moon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoonRepository extends JpaRepository<Moon, Long> {
}