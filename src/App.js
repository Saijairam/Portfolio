import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.json'

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experience from './Components/Experience';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/experience' element={<Experience/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
