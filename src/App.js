import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import RepoList from "./components/RepoList";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Nav />
      <header>
        <h1>Sello Makena</h1>
        <p className="subtitle">Software Developer Portfolio</p>
      </header>
      <section id="about"><About /></section>
      <section id="projects"><RepoList username="RealSwitch" /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
      <footer>
        <p>© {new Date().getFullYear()} Sello Makena. Powered by GitHub Pages.</p>
      </footer>
    </div>
  );
}

export default App;