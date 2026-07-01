package fr.simplon.backend.model.enums;

public enum ResourceStatus {
    TODO("A faire"),
    IN_PROGRESS("En cours"),
    DONE("Terminé");

    private final String label;

    private ResourceStatus(String label) {
        this.label = label;
    }
}

