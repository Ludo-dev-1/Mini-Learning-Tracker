package fr.simplon.backend.service;

import fr.simplon.backend.model.Resource;
import fr.simplon.backend.model.enums.ResourceStatus;
import fr.simplon.backend.model.enums.ResourceType;
import fr.simplon.backend.repository.ResourceRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ResourceService {

    private final ResourceRepository resourceRepositoryinjected;

    public ResourceService(ResourceRepository resourceRepositoryinjected) {
        this.resourceRepositoryinjected = resourceRepositoryinjected;
    }

    public List<Resource> findAll() {
        return this.resourceRepositoryinjected.findAll();
    }

    public Resource create(Resource resource) {
        return this.resourceRepositoryinjected.save(resource);
    }

    public Optional<Resource> findById(Long resourceId) {
        return this.resourceRepositoryinjected.findById(resourceId);
    }

    public Optional<Resource> findByType(ResourceType resourceType) {
        return this.resourceRepositoryinjected.findByType(resourceType);
    }

    public Optional<Resource> findByStatus(ResourceStatus resourceStatus) {
        return this.resourceRepositoryinjected.findByStatus(resourceStatus);
    }
}
