import './App.css';
import About from './components/sections/About';
import Intro from './components/sections/Intro';
import Projects from './components/sections/Projects';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;
