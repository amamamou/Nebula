package com.example.nebula.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.beans.factory.annotation.Value;

@Service
public class PlanetService {

    private final RestTemplate restTemplate;

    public PlanetService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Value("${nasa.api.url}")
    private String nasaApiUrl;

    // Method to get all planets from the NASA API
    public String getPlanets() {
        // Build the URL for fetching planets
        String url = UriComponentsBuilder.fromHttpUrl(nasaApiUrl)
                .pathSegment("bodies")
                .queryParam("filter[]", "isPlanet,eq,true")
                .toUriString();

        // Call the NASA API and return the response
        return restTemplate.getForObject(url, String.class);
    }

    // Method to get a specific planet's data
    public String getPlanetDetails(String planetId) {
        String url = UriComponentsBuilder.fromHttpUrl(nasaApiUrl)
                .pathSegment("bodies", planetId)
                .toUriString();

        return restTemplate.getForObject(url, String.class);
    }

    // Method to get moons of a specific planet by its englishName
    public String getMoonsOfPlanet(String planetName) {
        String url = UriComponentsBuilder.fromHttpUrl(nasaApiUrl)
                .pathSegment("bodies")
                .queryParam("filter[]", "moons,eq,true")
                .queryParam("filter[]", "englishName,eq," + planetName) // Filter by englishName
                .toUriString();

        return restTemplate.getForObject(url, String.class);
    }
}
