package fr.simplon.backend.controller;

import fr.simplon.backend.model.Resource;
import fr.simplon.backend.model.enums.ResourceStatus;
import fr.simplon.backend.model.enums.ResourceType;
import fr.simplon.backend.service.ResourceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/resources")
public class ResourceController {

    private final ResourceService resourceServiceInjected;

    public ResourceController(ResourceService resourceServiceInjected) {
        this.resourceServiceInjected = resourceServiceInjected;
    }

    @GetMapping
    public ResponseEntity<List<Resource>> getAll() {
        return ResponseEntity.ok(resourceServiceInjected.findAll());
    }

    @GetMapping("/{resourceId}")
    public ResponseEntity<Optional<Resource>> getById(@PathVariable Long resourceId) {
        return ResponseEntity.ok(resourceServiceInjected.findById(resourceId));
    }

    @PostMapping
    public Resource save(@RequestBody Resource resource) {
        return resourceServiceInjected.create(resource);
    }

    @GetMapping("/type")
    public ResponseEntity<List<Resource>> getByType(@RequestParam ResourceType type) {
        return ResponseEntity.ok(resourceServiceInjected.findByType(type));
    }

    @GetMapping("status")
    public ResponseEntity<List<Resource>> getByStatus(@RequestParam ResourceStatus status) {
        return ResponseEntity.ok(resourceServiceInjected.findByStatus(status));
    }




}
