import React from 'react'
import '../../App.css';
import Header from '../header';

function contactpage() {
  return (
    <div>
        <header className="App-header">
            <Header />
        </header>
        <p>This is the contact page. </p>
        <footer className="App-footer">
        <p>© 2026 My Blog</p>
        </footer>
    </div>
  )
}

export default contactpage;