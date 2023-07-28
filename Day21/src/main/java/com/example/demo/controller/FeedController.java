package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.FeedbackRequest;
import com.example.demo.dto.UserFeedbackRequest;
import com.example.demo.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/feedback")
@CrossOrigin("*")
@RequiredArgsConstructor
public class FeedController {
	private final UserService userService;
	
	@PostMapping("/addUserFeedback")
	public ResponseEntity<String> addUserFeedback(@RequestBody UserFeedbackRequest userRequest){
		userService.addUserFeedback(userRequest);
		return ResponseEntity.status(HttpStatus.OK).body("Feedback added!");
	}
}