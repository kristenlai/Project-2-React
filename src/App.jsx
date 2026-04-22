import './App.css';
import { Route, Routes } from 'react-router';
import Home from './blog components/pages/homepage';
import Contacts from './blog components/pages/contactpage';
import About from './blog components/pages/aboutpage';
import PostList from './blog components/pages/postlist';
import IndivPost from './blog components/individualblogpost';
import Login from './blog components/pages/loginpage';
import { AuthProvider } from './blog components/authorize/AuthProvider';

function App() {

  
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<PostList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/posts/:post_id' element={<IndivPost />} />
      </Routes>
    </AuthProvider>
  );
}

export default App; 

// git add .
// git commit -m "first commit"
// git push origin main