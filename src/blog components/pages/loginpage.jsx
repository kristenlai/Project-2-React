import React from 'react'
import '../../App.css';
import Header from '../header';
import { useState } from 'react';
import { useAuth } from '../authorize/AuthContext';

function loginpage() {
    const {login} = useAuth();
    const [userData, setUserData]= useState({
        username: "",
        password: ""
    });
    const onSubmit = (e) => {
        e.preventDefault();
        //console.log(userData);
        login(userData.username);
    };
    
    return (
    <div className='App'>
        <header className="App-header">
            <Header />
        </header>
        <div className='App-body'>
          <div>
            <form onSubmit={onSubmit} className='form' style={{ width: '350px' }}>
                <input 
                placeholder='Username'
                value={userData.username} 
                onChange={(e) => setUserData({...userData, username: e.target.value})} />
                <input 
                placeholder='Password'
                type='password'
                value={userData.password} 
                onChange={(e) => setUserData({...userData, password: e.target.value})} />
                <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
        <footer className="App-footer">
        <p>© 2026 My Blog</p>
        </footer>
    </div>
  )
}

export default loginpage;