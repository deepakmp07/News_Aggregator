package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.NewsSaved;
import com.example.demo.repository.NewsSavedRepository;
import com.example.demo.service.NewsSavedService;

@RestController
@RequestMapping("/api/v1/auth/news/saved")
@CrossOrigin("*")
public class NewsSavedController {

    private final NewsSavedService newsSavedService;

    @Autowired
    NewsSavedRepository repo;

    @Autowired
    public NewsSavedController(NewsSavedService newsSavedService) {
        this.newsSavedService = newsSavedService;
    }

    @GetMapping("/get")
    public List<NewsSaved> getAll() {
        return repo.findAll();
    }

    @PostMapping("/save")
    public ResponseEntity<String> saveNews(@RequestParam String email, @RequestBody NewsSaved newsSaved) {
        newsSavedService.saveNews(email, newsSaved);
        return new ResponseEntity<>("News saved successfully.", HttpStatus.OK);
    }

    @DeleteMapping("/remove")
    public ResponseEntity<String> removeNews(@RequestParam String email, @RequestParam Long id) {
        newsSavedService.removeNews(email, id);
        return new ResponseEntity<>("News removed successfully.", HttpStatus.OK);
    }
}
