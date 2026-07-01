package fr.simplon.backend.usecases;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;

import fr.simplon.backend.model.Category;
import fr.simplon.backend.service.CategoryService;

public class categoryUsecase {
    CategoryService cs;
    // All categories, new category
    public ResponseEntity<List<Category>> allCategories() {
        List<Category> categoryList = cs.findAll();

        if (!categoryList.isEmpty()) {
            return new ResponseEntity<List<Category>>(categoryList, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Category> createCategory(Category newCategory) {
        Object created = cs.createCategory(newCategory);
        if (created instanceof Category c) {
            return new ResponseEntity<Category>(c, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
}
