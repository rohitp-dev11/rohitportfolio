import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CallToAction from './components/CallToAction';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-light-bg">
      <Header />
      <main>
        <Hero />
        {/* Designer divider */}
        <div className="flex justify-center my-8 md:my-0 md:-translate-y-12" aria-hidden="true">
          <svg width="288" height="20" viewBox="0 0 288 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10C48 -10 240 -10 288 10C240 30 48 30 0 10Z" className="fill-current text-accent/30"/>
          </svg>
        </div>
        <About />
        <Education />
        <Experience />
        <Services />
        <Skills />
        <Projects />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;