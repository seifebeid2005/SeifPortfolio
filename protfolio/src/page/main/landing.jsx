import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Timeline from "../../components/Timeline/Timeline";
import "./main.css";

function App() {
  return (
    <div className="app">
      <div className="layout-container">
        <Header />
        <div className="main-content">
          <div className="layout-content-container">
            <Hero />
            <About />
            <Timeline />
            <Projects />
            <Services />
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
