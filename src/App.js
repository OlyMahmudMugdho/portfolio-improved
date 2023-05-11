import './dist/output.css';
import '../src/custom.css';
import Navigation from './components/Layout/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';

function App() {
  return (
      <div className="App scroll-smooth">
        <Navigation />
        <Home />
        <About />
        <Skill />
      </div>
  );
}

export default App;
