package fr.simplon.backend.entity;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Ressource {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column
    private String url;

    @Column
    private TypeEnum type;

    @Column 
    private StatutEnum status;

    @Column
    private String createdAt;

    @Column
    private String category;

    
}
