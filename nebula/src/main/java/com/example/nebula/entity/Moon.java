package com.example.nebula.entity;

import jakarta.persistence.*;

@Entity
public class Moon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Double diameter;  // Diameter in kilometers

    @Column(nullable = false)
    private Boolean hasRings;  // Whether the moon has rings

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "planet_id", nullable = false)
    private Planet planet;  // The planet the moon orbits

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

    public Planet getPlanet() {
        return planet;
    }

    public void setPlanet(Planet planet) {
        this.planet = planet;
    }
}
