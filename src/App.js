import React from 'react';
import Header from './components/Header';
import WhoIam from './components/WhoIam';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <WhoIam />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
