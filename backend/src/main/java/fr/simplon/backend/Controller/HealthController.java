package fr.simplon.backend.Controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;



/**
 * HealthController
 */
@RestController
public class HealthController {
    @RequestMapping("/health")

    @GetMapping("")
    public ResponseEntity<String> getHealth() {
        return new ResponseEntity<>("Ok!", HttpStatus.OK);
    }    
}