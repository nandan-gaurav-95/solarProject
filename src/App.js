import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Project from './components/Project';
import Contact from './components/Contact';

import Career from './components/Career';
import Meditech from './components/meditech/Meditech';

function App() {
  return (
   <Router> 
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/meditech' element={<Meditech/>}/>
        <Route path='/solarproject' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/contact' element={<Contact/>}/>
      
    </Routes>
   </Router>
  );
}
export default App;
