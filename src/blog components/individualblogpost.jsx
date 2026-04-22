import React from 'react'
import Header from './header'
import Comments from './comments';
import Info from './info';
import '../App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

function individualblogpost() {
  const params = useParams();
  console.log(params);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  });

    const postInfo =  {
    title: 'Post ' + params.post_id,
    content: 'This is the content of my first blog post. Welcome to my blog! Hope you enjoy reading it.',
    author: 'Jane Doe', 
    date: '3/30/2026',
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      
      <main className="App-body">
        <div className="post">
          {loading ? (
            <p>Loading</p>
          ) : (
          <>
            <Info 
              title={postInfo.title} 
              content={postInfo.content} 
              author={postInfo.author} 
              date={postInfo.date}/>
            <Comments />
          </>
          )}
        </div>
      </main>

      <footer className="App-footer">
        <p>© 2026 My Blog</p>
      </footer>
    </div>
  )
}

export default individualblogpost;