package com.example.demo.service;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.vo.Feedback;
import com.example.demo.dto.FeedbackRequest;
import com.example.demo.dto.UserFeedbackRequest;
import com.example.demo.entity.iNewsUserDetails;
import com.example.demo.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {
	private final UserRepository userRepository;
	
	private final RestTemplate restTemplate;

	public void addUserFeedback(UserFeedbackRequest userRequest) {
		// var user = iNewsUserDetails.builder().name(userRequest.getName()).email(userRequest.getEmail()).build();
		var feedback = FeedbackRequest.builder().email(userRequest.getEmail()).feedback(userRequest.getFeedback()).build();
		// userRepository.save(user);
		log.info("Data :" +feedback);
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<FeedbackRequest> requestEntity = new HttpEntity<>(feedback, headers);
		restTemplate.postForObject("http://192.168.107.206:8082/api/v1/feed/addFeedback", requestEntity, Feedback.class);
	}
}