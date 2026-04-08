import React from 'react'
import '../../App.css';
import Header from '../header';

function aboutpage() {
  return (
    <div>
        <header className="App-header">
            <Header />
        </header>
        <p>This is the about page. </p>
        <footer className="App-footer">
        <p>© 2026 My Blog</p>
        </footer>
    </div>
  )
}

export default aboutpage;