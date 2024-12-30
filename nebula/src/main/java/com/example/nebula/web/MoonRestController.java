package com.example.nebula.web;

import com.example.nebula.entity.Moon;
import com.example.nebula.service.MoonService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/moons")
@CrossOrigin(origins = "http://localhost:4200")
public class MoonRestController {

    private final MoonService moonService;

    public MoonRestController(MoonService moonService) {
        this.moonService = moonService;
    }

    @GetMapping
    public ResponseEntity<List<Moon>> getAllMoons() {
        return ResponseEntity.ok(moonService.getAllMoons());
    }

    @PostMapping
    public ResponseEntity<Moon> createMoon(@RequestBody Moon moon) {
        return ResponseEntity.ok(moonService.createMoon(moon));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Moon> updateMoon(@PathVariable Long id, @RequestBody Moon updatedMoon) {
        return ResponseEntity.ok(moonService.updateMoon(id, updatedMoon));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMoon(@PathVariable Long id) {
        moonService.deleteMoon(id);
        return ResponseEntity.noContent().build();
    }
}
