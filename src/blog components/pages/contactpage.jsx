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
          <h2>Contact Page</h2>
          <form className="form">
            <input 
            placeholder="Name"
            ></input>
            <input 
            placeholder="Email"
            type="email"
            ></input>
            <textarea 
            cols="50" rows="3" 
            placeholder="Message"
            ></textarea>
            <button 
            type="submit"
            >Submit</button>
          </form>
        </div>
        <footer className="App-footer">
        <p>© 2026 My Blog</p>
        </footer>
    </div>
  )
}

export default contactpage;