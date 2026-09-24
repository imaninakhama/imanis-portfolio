import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [mode, setMode] = useState("dev");

  return (
    <div data-mode={mode} className="min-h-screen bg-cream">
      <div aria-hidden="true" className="paper-grain" />

      <Nav />

      <main>
        <Hero />
        <About />
        <Skills mode={mode} onModeChange={setMode} />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
