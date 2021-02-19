import './App.css';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Footer from './components/sections/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
