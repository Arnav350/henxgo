import React from "react";
import Logo_Invert from "./assets/Logo_Invert.png";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="nav">
        <img src={Logo_Invert} alt="Logo" className="nav__logo" />
        <div>
          <a href="" className="nav__section">
            Who are we
          </a>
          <a href="" className="nav__section">
            What we do
          </a>
          <a href="" className="nav__section">
            Projects
          </a>
          <a href="" className="nav__section">
            Contact
          </a>
        </div>
      </nav>
      <section className="info">Test</section>
      <section className="services">Test</section>
      <section className="projects">Test</section>
      <section className="contact">Test</section>
      <footer></footer>
    </div>
  );
}

export default App;
