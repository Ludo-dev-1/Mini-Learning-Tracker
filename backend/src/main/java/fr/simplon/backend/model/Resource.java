package fr.simplon.backend.model;


import fr.simplon.backend.model.enums.ResourceStatus;
import fr.simplon.backend.model.enums.ResourceType;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "resource")
@Data
public class Resource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String url;

    @Column(nullable = false)
    private ResourceType type;

    @Column(nullable = false)
    private ResourceStatus status;

    @ManyToOne
    private Category category;
}