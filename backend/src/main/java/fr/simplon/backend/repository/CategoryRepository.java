package fr.simplon.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.simplon.backend.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
