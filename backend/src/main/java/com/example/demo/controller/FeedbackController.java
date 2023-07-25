package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.FeedbackRequest;
import com.example.demo.dto.FeedbackResponse;
import com.example.demo.service.FeedbackService;

@RestController
@RequestMapping("/api/v1/feed")
public class FeedbackController {

    private final FeedbackService feedbackService;

    @Autowired
    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @PostMapping("/addFeedback")
    public ResponseEntity<String> addFeedback(@RequestBody FeedbackRequest feedbackRequest) {
        boolean feedbackExists = feedbackService.addFeedback(feedbackRequest);
        if (feedbackExists) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Feedback added!");
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Something went wrong!");
        }
    }

    @GetMapping("/getFeedback")
    public ResponseEntity<List<FeedbackResponse>> getFeedback() {
        return ResponseEntity.status(HttpStatus.OK).body(feedbackService.getFeedback());
    }
}
