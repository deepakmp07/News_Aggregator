package com.example.demo.article;

import com.example.demo.entity.ArticleDetails;
import com.example.demo.repository.ArticleDetailRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ArticleController {
    private final NewsArticleService newsArticleService;

	@Autowired
	ArticleDetailRepository repo;

    @Autowired
    public ArticleController(NewsArticleService newsArticleService) {
        this.newsArticleService = newsArticleService;
    }

	@GetMapping("/api/v1/article")
	public List<ArticleDetails> getAllData() {
		return repo.findAll();
	}

    @GetMapping("/api/v1/fetch")
    public List<ArticleDetails> fetchAndStoreNewsArticles() {
        return newsArticleService.fetchNewsArticles();
    }

    @GetMapping("/api/v1/article/get")
    public String getAllNewsArticles() {
        return newsArticleService.saveNewsArticlesToDatabase();
    }
}
