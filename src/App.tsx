import React from "react";
import Logo from "./assets/Logo.png";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="nav">
        <img src={Logo} alt="Logo" />
        <div>
          <a href="">Who are we</a>
          <a href="">What we do</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>
      </nav>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <footer></footer>
    </div>
  );
}

export default App;
