import './App.css';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Intro from './components/sections/Intro';
import Projects from './components/sections/Projects';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
