import React from 'react'
import '../../App.css';
import Header from '../header';
import Piper from '../Piper.png';

function aboutpage() {
  return (
    <div className='App'>
        <header className="App-header">
            <Header />
        </header>
        <div className='App-body'>
          <p>This is a blog created by Kristen Lai and Scarlett Law 
            for ITIS-3135. This blog was created using react and is 
            used to showcase what we're learned from this class. </p>
          <p>Here is a picture of Piper (Scarlett's dog):</p>
          <img src={Piper} alt="Piper the dog" width="300px" height="400px" />
        </div>
        <footer className="App-footer">
        <p>© 2026 My Blog</p>
        </footer>
    </div>
  )
}

export default aboutpage;