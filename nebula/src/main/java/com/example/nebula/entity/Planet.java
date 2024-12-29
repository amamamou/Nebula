package com.example.nebula.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Planet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Automatically generate the id
    private Long id;
    private String name;

    @Enumerated(EnumType.STRING)
    private TypePlanet type; // Use the enum here

    private Double mass;

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

    public TypePlanet getType() {
        return type;
    }

    public void setType(TypePlanet type) {
        this.type = type;
    }

    public Double getMass() {
        return mass;
    }

    public void setMass(Double mass) {
        this.mass = mass;
    }
}
