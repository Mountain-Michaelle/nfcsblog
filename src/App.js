import './App.css';
import '../src/Assets/CSS/Base.css';
import {Routes, Route, Switch} from 'react-router-dom';
import NavBar from '../src/Components/Navigation/NavBar.js';
import Feed from './Components/Body/Feed';
import Renderer from './Components/Renderer.js';
import Footer from './Components/Footer/Footer';

import {Provider} from 'react-redux';
import store from './Components/Body/store';
import Layout from './Components/HOC/Layout';

function App() {
  return (
  <Provider store={store}>
      <div className="App">
        
       <Layout> 
        <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/:page" element={<Renderer />} />
              <Route element={() => 404} /> 
        </Routes>
        </Layout>
        <Footer />
      </div>
  </Provider>
  );
}

export default App;
