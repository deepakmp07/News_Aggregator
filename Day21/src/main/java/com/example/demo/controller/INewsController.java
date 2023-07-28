package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.UserRepository;


// import jakarta.ws.rs.Path;

// import com.example.demo.entity;
import com.example.demo.entity.iNewsUserDetails;

@RestController
@RequestMapping("/api/v1/user")
public class INewsController {

    @Autowired
    UserRepository repo;

    @GetMapping("/get")
    public List<iNewsUserDetails> getAll() {
        return repo.findAll();
    }

    @GetMapping("/getByUName/{username}")
    public List<iNewsUserDetails> findUserByun(@PathVariable String username) {
        return repo.findByUsername(username);
    }

    //      

    // @GetMapping("/getById/{id}")
    // public List<iNewsUserDetails> findByUser_id(@PathVariable long id) {
    //     return repo.findByUser_id(id);
    // }
    
}
