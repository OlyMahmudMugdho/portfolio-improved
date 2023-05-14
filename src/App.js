import './dist/output.css';
import '../src/custom.css';
import Navigation from './components/Layout/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
      <div className="App scroll-smooth">
        <Navigation />
        <Home />
        <About />
        <Skill />
        <Work />
        <Contact />
      </div>
  );
}

export default App;
