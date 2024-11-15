import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Technologies from './components/Techno';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Technologies/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
