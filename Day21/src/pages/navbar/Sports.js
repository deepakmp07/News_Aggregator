import React, { useEffect, useState } from "react";
import axios from "axios";
import "../NewsDemo.css";

function Sports() {
  const [news, setNews] = useState([]);

  const getData=  async()=>{
    let response = await axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=fed84c6bcfed400f85e9215e9c5b53c5"
      )
      setNews(response.data.articles);
  }

  useEffect(() => {
    getData()
  }, []);


  return (
    <div className="news-demo">
      <h2>Sports News (English)</h2>
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

export default Sports;
