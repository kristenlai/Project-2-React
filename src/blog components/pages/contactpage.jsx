import React from 'react'
import '../../App.css';
import Header from '../header';

function contactpage() {
  return (
    <div className='App'>
        <header className="App-header">
            <Header />
        </header>
        <div className='App-body'>
          <p>This is the contact page. </p>
        </div>
        <footer className="App-footer">
        <p>© 2026 My Blog</p>
        </footer>
    </div>
  )
}

export default contactpage;