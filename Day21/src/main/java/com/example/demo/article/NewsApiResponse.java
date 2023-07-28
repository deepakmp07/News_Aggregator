
package com.example.demo.article;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NewsApiResponse {
    @JsonProperty("articles")
    private List<NewsApiArticle> articles;
    
    

    public NewsApiResponse(List<NewsApiArticle> articles) {
		super();
		this.articles = articles;
	}
    





	public NewsApiResponse() {
		super();
		// TODO Auto-generated constructor stub
	}






	public List<NewsApiArticle> getArticles() {
        return articles;
    }
    

   


	public void setArticles(List<NewsApiArticle> articles) {
        this.articles = articles;
    }
}

