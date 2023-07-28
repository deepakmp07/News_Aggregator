package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.NewsSaved;

@Repository
public interface NewsSavedRepository extends JpaRepository<NewsSaved, Long> {

    // NewsSaved findByIdAndEmail(Long id, String email);

    NewsSaved findByIdAndEmail(Long id, String email);
}
