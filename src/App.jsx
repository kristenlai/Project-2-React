import './App.css';
import { Route, Routes } from 'react-router';
import Blogpost from './blog components/individualblogpost';
import Contacts from './blog components/pages/contactpage';
import About from './blog components/pages/aboutpage';
import PostList from './blog components/pages/postlist';
import IndivPost from './blog components/individualblogpost';

function App() {

  
  return (
    <Routes>
      <Route path='/' element={<Blogpost />} />
      <Route path='/contact' element={<Contacts />} />
      <Route path='/about' element={<About />} />
      <Route path='/posts' element={<PostList />} />
      <Route path='/posts/:post_id' element={<IndivPost />} />
    </Routes>
  );
}

export default App; 
