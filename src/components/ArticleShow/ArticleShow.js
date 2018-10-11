import React, { Component } from 'react';
import './ArticleShow.css';

class ArticleShow extends Component {
  getArticles() {
    const http = new XMLHttpRequest();
    const baseUrl = 'https://office.bexio.com/api2.php/';
    const url = `${baseUrl}${this.state.Organisation}/article`;
    http.open('GET', url, true);
    http.setRequestHeader('Accept', 'application/json');
    http.setRequestHeader('Authorization', `Bearer ${this.state.AccessToken}`);

    http.onreadystatechange = function() {
      if (http.readyState === 4 && http.status === 200) {
        const articles = JSON.parse(http.responseText);
        console.log(articles);
      }
    };

    http.send();
  }

  render() {
    return (
      <div>
        <p>get articles</p>
      </div>
    );
  }
}

export default ArticleShow;