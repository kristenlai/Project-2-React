import React from 'react'
import '../../App.css';
import Header from '../header';
import { Link } from 'react-router';

function homepage() {
  return (
    <div className='App'>
        <header className="App-header">
            <Header />
        </header>
        <div className='Home'>
          <h1>Welcome to My Blog!</h1>
          <h3>Click <Link to="/login" style={{ color: 'blue', fontWeight: 'bold', textDecoration: 'underline' }}>Here</Link> to Login</h3>
          <h3>Click <Link to="/posts" style={{ color: 'blue', fontWeight: 'bold', textDecoration: 'underline' }}>Here</Link> to Explore Our Blog Posts</h3>
        </div>
        <footer className="App-footer">
        <p>© 2026 My Blog</p>
        </footer>
    </div>
  )
}

export default homepage;