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
  const [appReady, setAppReady] = useState(
    () => Boolean(sessionStorage.getItem('intro-shown'))
  );

  const handleIntroDone = () => {
    sessionStorage.setItem('intro-shown', '1');
    setAppReady(true);
  };

  return (
    <>
      {!appReady && <Intro onDone={handleIntroDone} />}
      <Nav />
      <main>
        <Hero appReady={appReady} />
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
