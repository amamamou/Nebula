package com.example.nebula.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
public class Moon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(nullable = false)
    private String name;

    @NotNull
    @Column(nullable = false)
    private Double diameter; // Diameter in kilometers

    @NotNull
    @Column(nullable = false)
    private Boolean hasRings; // Whether the moon has rings

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getDiameter() {
        return diameter;
    }

    public void setDiameter(Double diameter) {
        this.diameter = diameter;
    }

    public Boolean getHasRings() {
        return hasRings;
    }

    public void setHasRings(Boolean hasRings) {
        this.hasRings = hasRings;
    }
}
