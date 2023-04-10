import './dist/output.css';
import '../src/custom.css';
import Navigation from './components/Layout/Navigation';
import Home from './components/Home';
import About from './components/About';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App scroll-smooth">
        <Navigation />
        <Home />
        <About />
      </div>
    </HashRouter>
  );
}

export default App;
