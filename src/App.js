// src/App.js
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Education />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}
