
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  // Simple scroll animation trigger on load
  useEffect(() => {
    document.body.classList.add('opacity-0');
    setTimeout(() => {
      document.body.classList.remove('opacity-0');
      document.body.classList.add('opacity-100', 'transition-opacity', 'duration-1000');
    }, 100);
  }, []);

  return (
    <div className="min-h-screen selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-12 px-4 border-t border-gray-800 text-center bg-gray-950">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <p className="text-gray-500">© 2024 Bushra Basharat. Built with React & AI.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
