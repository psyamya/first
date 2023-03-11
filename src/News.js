import React, { useEffect, useState } from 'react';
import axios from "axios";
import './style.css'
    const News = () => {
    const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f353dcdd0b654e5bbd44a2cd0cae4e5c'
    const [news, setNews] = useState([]);
     useEffect(() => {
        axios.get(url)
        .then((res) => { console.log(res.data.articles);
             setNews(res.data.articles) })
    }, []);
   
     const lis = news.map((val, index) => { 
        return (
        <div className='box'>
        <img src={val.urlToImage} className='img' />
         <h2>{val.title}</h2>
         <p>{val.description}</p> <p>{val.publishedAt}</p> 
         </div>) 
         })
         return(
          <div className='flex-container'></div>)
    }
export default News;
