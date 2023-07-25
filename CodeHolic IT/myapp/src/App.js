import './App.css';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import Main from './component/Main';
import Portfolio from './component/Portfolio';
import Blog from './component/Blog';
import Career from './component/Career';
import Contact from './component/Contact';

import './Style/navbar.css'
import './Style/portfolio.css'
import './Style/blog.css'
import './Style/career.css'
import './Style/contact.css'
import './Style/Media.css'


function App() {
  return (
<>
 <Router>
  <Routes>
    <Route index element={<Main/>}/>
    <Route path='/portfolio' element={<Portfolio/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/career' element={<Career/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>

 </Router>

</>       
  );
}

export default App;
