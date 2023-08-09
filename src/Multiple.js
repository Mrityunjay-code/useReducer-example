import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './multiple.css'; // Import the CSS file

const Multiple = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2023-07-17&to=2023-07-17&sortBy=popularity&apiKey=21134c5bb81b411fa3bb5a1a2276ae5b');
        setNews(response.data.articles);
      } catch (error) {
        console.log('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container">
      <h1>News</h1>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <img src={article.urlToImage} alt={article.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Multiple;
