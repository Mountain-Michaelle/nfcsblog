import './App.css';
import '../src/Assets/CSS/Base.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from '../src/Components/Navigation/NavBar.js';
import Feed from './Components/Body/Feed';
import Renderer from './Components/Renderer.js';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/:page" element={<Renderer />} />
        <Route element={() => 404} /> 
      </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;
