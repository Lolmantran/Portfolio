import { useState } from 'react';
import './App.css'
import Intro         from './components/Intro'
import Nav          from './components/Nav'
import Hero         from './components/Hero'
import Experience   from './components/Experience'
import Projects     from './components/Projects'
import Skills       from './components/Skills'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import DraggableFAB from './components/DraggableFAB'

export default function App() {
  const alreadySeen = Boolean(sessionStorage.getItem('intro-shown'));
  const [showIntro, setShowIntro] = useState(!alreadySeen);
  const [heroReady, setHeroReady] = useState(alreadySeen);

  const handleIntroLeaving = () => setHeroReady(true);

  const handleIntroDone = () => {
    sessionStorage.setItem('intro-shown', '1');
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <Intro onLeaving={handleIntroLeaving} onDone={handleIntroDone} />}
      <Nav />
      <main>
        <Hero appReady={heroReady} />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <DraggableFAB />
    </>
  );
}
