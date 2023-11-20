import './index.css';
import { Home, About, Contact, Project } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
       <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
