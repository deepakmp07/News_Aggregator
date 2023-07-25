package com.example.demo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.FeedbackRequest;
import com.example.demo.dto.FeedbackResponse;
import com.example.demo.entity.Feedback;
import com.example.demo.repository.FeedbackRepository;

@Service
public class FeedbackService {
	
	private final FeedbackRepository feedbackRepository;

	@Autowired
	public FeedbackService(FeedbackRepository feedbackRepository) {
		this.feedbackRepository = feedbackRepository;
	}

	public boolean addFeedback(FeedbackRequest feedbackRequest) {
		Feedback feedback = new Feedback();
		feedback.setEmail(feedbackRequest.getEmail());
		feedback.setFeedback(feedbackRequest.getFeedback());
		feedbackRepository.save(feedback);
		List<Feedback> feedbackData = feedbackRepository.findAll();
		return !feedbackData.isEmpty();
	}

	public List<FeedbackResponse> getFeedback() {
		List<Feedback> feedbacks = feedbackRepository.findAll();
		return feedbacks.stream()
				.map(feedback -> mapToFeedbackResponse(feedback))
				.collect(Collectors.toList());
	}

	private FeedbackResponse mapToFeedbackResponse(Feedback feedback) {
		return new FeedbackResponse(feedback.getEmail(), feedback.getFeedback());
	}
}
