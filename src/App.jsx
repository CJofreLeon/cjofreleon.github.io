import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Technologies from './sections/Technologies';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
   
      <Projects />
      
      <Technologies />
        
      <About />
 
      <Contact />
    </>
  );
}

export default App;