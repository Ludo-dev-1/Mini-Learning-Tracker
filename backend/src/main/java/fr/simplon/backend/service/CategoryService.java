package fr.simplon.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import fr.simplon.backend.model.Category;
import fr.simplon.backend.repository.CategoryRepository;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepoInjected;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepoInjected = categoryRepository;
    }

    public Optional<Category> findById(Long id) {
        return categoryRepoInjected.findById(id);
    }

    public List<Category> findAll() {
        return categoryRepoInjected.findAll();
    }

    public Category createCategory(Category newCategory) {
        return categoryRepoInjected.save(newCategory);
    }
}
