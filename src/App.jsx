import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import CTA from './components/CTA';
import News from './components/News';
import Careers from './components/Careers';
import Members from './components/Members';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <CTA />
        <News />
        <Careers />
        <Members />
      </main>
      <Footer />
    </div>
  );
}

export default App;

