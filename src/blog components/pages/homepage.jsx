import React from 'react'
import '../../App.css';
import Header from '../header';

function homepage() {
  return (
    <div className='App'>
        <header className="App-header">
            <Header />
        </header>
        <div className='Home'>
          <h1>Welcome to My Blog!</h1>
          <h3>Head over to the login page to get started.</h3>
        </div>
        <footer className="App-footer">
        <p>© 2026 My Blog</p>
        </footer>
    </div>
  )
}

export default homepage;