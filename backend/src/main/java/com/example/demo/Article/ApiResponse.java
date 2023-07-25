package com.example.demo.Article;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

public class ApiResponse {
    @JsonProperty("articles")
    private List<ApiRequest> articles;

    public List<ApiRequest> getArticles() {
        return articles;
    }

    public void setArticles(List<ApiRequest> articles) {
        this.articles = articles;
    }
}
