import React from 'react'
import '../../App.css';
import { Link } from 'react-router';
import Header from '../header';

function postlist() {
  return (
    <div>
        <header className="App-header">
            <Header />
        </header>
        <div className='postList'>
          <Link to="/posts/1">Post 1</Link>
          <Link to="/posts/2">Post 2</Link>
          <Link to="/posts/3">Post 3</Link>
        </div>
        <footer className="App-footer">
        <p>© 2026 My Blog</p>
        </footer>
    </div>
  )
}

export default postlist;