import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewsDemo.css";

function NewsDemo() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?language=en&apiKey=fed84c6bcfed400f85e9215e9c5b53c5"
      )
      .then((response) => setNews(response.data.articles))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="news-demo">
      <h2>World News</h2>
      <div className="news-list">
        {news.map((article, index) => (
          <div className="news-item" key={index}>
            <h3 className="news-title">{article.title}</h3>
            <img className="news-image" src={article.urlToImage} alt="Article" />
            <p className="news-description">{article.description}</p>
            <a className="news-link" href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsDemo;
