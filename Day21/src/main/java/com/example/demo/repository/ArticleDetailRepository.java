package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.ArticleDetails;

@Repository
public interface ArticleDetailRepository extends JpaRepository<ArticleDetails, Long> {
    // Any additional methods or custom queries can be added here.
}
