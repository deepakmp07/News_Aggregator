package com.example.demo.Article.Controller;


import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.ArticleDetails;
import com.example.demo.Repository.ArticleDetailRepository;


@RestController
public class ArticleDetailsController {
	@Autowired
	ArticleDetailRepository repo;
	
	@GetMapping("/geta")
	public List<ArticleDetails> findall() {
		return repo.findAll();
	}
	@PostMapping("/add")
    public ResponseEntity<String> addArticleDetails(@RequestBody ArticleDetails articleDetails) {
        try {
            // Assuming ArticleDetailRepository has a save method to store ArticleDetails in the database
            repo.save(articleDetails);

            return new ResponseEntity<>("ArticleDetails added successfully!", HttpStatus.CREATED);
        } catch (Exception e) {
            // Handle any exceptions that might occur during the save process
            return new ResponseEntity<>("Failed to add ArticleDetails: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
