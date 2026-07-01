package fr.simplon.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import fr.simplon.backend.model.Category;
import fr.simplon.backend.service.CategoryService;
import fr.simplon.backend.usecases.CategoryUsecase;
import fr.simplon.backend.usecases.categoryUsecase;

import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
public class CategoryController {
    private CategoryUsecase cu;
    public CategoryController(CategoryUsecase cu) {
        this.cu = cu;
    }

    @RequestMapping("/categories")

    @GetMapping("")
    public ResponseEntity<List<Category>> getAllCategories() {
        return cu.allCategories();
    }

    @PostMapping("/new")
    public ResponseEntity<Category> postNewCategory(@RequestBody Category newCategory) {
        return cu.createCategory(newCategory);
    }
}
