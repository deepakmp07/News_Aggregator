package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.entity.iNewsUserDetails;
import java.util.List;


public interface UserRepository extends JpaRepository<iNewsUserDetails,Long> {

    Optional<iNewsUserDetails> findByEmail(String email);

    // List<iNewsUserDetails> findByEmail(String email);
    List<iNewsUserDetails> findByUsername(String username);

    // List<iNewsUserDetails> findByUser_id(long user_id);


  
    
}