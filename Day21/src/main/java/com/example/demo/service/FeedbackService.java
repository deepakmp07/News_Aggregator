package com.example.demo.service;

import java.util.List;
import org.springframework.stereotype.Service;

import com.example.demo.dto.FeedbackRequest;
import com.example.demo.dto.FeedbackResponse;
import com.example.demo.entity.Feedback;
import com.example.demo.repository.FeedbackRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FeedbackService {
	private final FeedbackRepository feedbackRepository;

	public boolean addFeedback(FeedbackRequest feedbackRequest) {
		var feedback = Feedback.builder().email(feedbackRequest.getEmail()).feedback(feedbackRequest.getFeedback()).build();
		feedbackRepository.save(feedback);
		List<Feedback> feedbackData = feedbackRepository.findAll();
		if(feedbackData.size() > 0) {
			return true;
		} else {
			return false;
		}
	}

	public List<FeedbackResponse> getFeedback() {
		List<Feedback> feedbacks = feedbackRepository.findAll();
		return feedbacks.stream().map(feedback -> mapToFeedbackResponse(feedback)).toList();
	}

	private FeedbackResponse mapToFeedbackResponse(Feedback feedback) {
		return FeedbackResponse.builder().email(feedback.getEmail()).feedback(feedback.getFeedback()).build();
	}

}