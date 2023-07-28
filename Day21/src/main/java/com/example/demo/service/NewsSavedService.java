package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.NewsSaved;
import com.example.demo.repository.NewsSavedRepository;

@Service
public class NewsSavedService {

    private final NewsSavedRepository newsSavedRepository;

    @Autowired
    public NewsSavedService(NewsSavedRepository newsSavedRepository) {
        this.newsSavedRepository = newsSavedRepository;
    }

    public void saveNews(String email, NewsSaved newsSaved) {
        newsSaved.setEmail(email);
        newsSavedRepository.save(newsSaved);
    }

    public void removeNews(String email, Long id) {
        NewsSaved newsSaved = newsSavedRepository.findByIdAndEmail(id, email);
        if (newsSaved != null) {
            newsSaved.setIsSaved(false); // Set the isSaved field to false instead of deleting the row
            newsSavedRepository.save(newsSaved);
        }
    }
}
