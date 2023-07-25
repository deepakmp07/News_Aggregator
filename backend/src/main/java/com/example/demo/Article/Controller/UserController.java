package com.example.demo.Article.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.UserDetails;
import com.example.demo.Repository.UserRepository;



@RestController

public class UserController {
    @Autowired
    UserRepository repo;

    @GetMapping("/get")
    public List<UserDetails> getAll() {
        return repo.findAll();
    }

    @PostMapping("/post")
    public UserDetails create(@RequestBody UserDetails user) {
        return repo.save(user);
    }
    
}