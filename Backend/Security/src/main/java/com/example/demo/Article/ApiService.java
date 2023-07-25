package com.example.demo.Article;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.Entity.ArticleDetails;
import com.example.demo.Repository.ArticleDetailRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class ApiService {
    private static Logger logger = LoggerFactory.getLogger(ApiService.class);

    private final RestTemplate restTemplate;
    private final String apiUrl;
    private final String apiKey;
    private final ArticleDetailRepository articleDetailRepository;

    @Autowired
    public ApiService(RestTemplate restTemplate,
                      @Value("${newsapi.url}") String apiUrl,
                      @Value("${newsapi.apikey}") String apiKey,
                      ArticleDetailRepository articleDetailRepository) {
        this.restTemplate = restTemplate;
        this.apiUrl = apiUrl;
        this.apiKey = apiKey;
        this.articleDetailRepository = articleDetailRepository;
    }

    public List<ArticleDetails> getAll() {
        return articleDetailRepository.findAll();
    }

    public List<ArticleDetails> fetchNewsArticles() {
        String url = apiUrl + "?apiKey=" + apiKey;
        logger.info("url " + url);

        ResponseEntity<ApiResponse> response = restTemplate.getForEntity(url, ApiResponse.class);
        List<ArticleDetails> articles = new ArrayList<>();
        if (response.getStatusCode().is2xxSuccessful()) {
            ApiResponse newsApiResponse = response.getBody();
            if (newsApiResponse != null && newsApiResponse.getArticles() != null) {
                for (ApiRequest newsApiArticle : newsApiResponse.getArticles()) {
                    articles.add(mapToArticleDetails(newsApiArticle));
                }
            }
        }
        return articles;
    }

    private ArticleDetails mapToArticleDetails(ApiRequest newsApiArticle) {
        ArticleDetails articleDetails = new ArticleDetails();
        articleDetails.setAuthor(newsApiArticle.getAuthor());
        articleDetails.setTitle(newsApiArticle.getTitle());
        articleDetails.setDescription(newsApiArticle.getDescription());
        articleDetails.setUrl(newsApiArticle.getUrl());
        articleDetails.setImg_url(newsApiArticle.getUrlToImage());
        articleDetails.setP_date(newsApiArticle.getPublishedAt());
        articleDetails.setContent(newsApiArticle.getContent());
        articleDetails.setLikes(0);
        articleDetails.setSaved(false);
        return articleDetails;
    }

    public void saveNewsArticlesToDatabase() {
        List<ArticleDetails> articles = fetchNewsArticles();
        articleDetailRepository.saveAll(articles);
        logger.info("program Ended");
    }
}
