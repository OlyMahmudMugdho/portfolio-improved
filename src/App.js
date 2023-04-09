import Header from './components/Header';
import Home from './components/Home';
import './dist/output.css';
import '../src/custom.css';

function App() {
  return (
    <div className="App scroll-smooth">
      <Header />
      <Home />
    </div>
  );
  }

export default App;
