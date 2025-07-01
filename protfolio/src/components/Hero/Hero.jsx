import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      return () =>
        heroElement.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-container" ref={heroRef}>
      <div className="hero-content">
        <div
          className="hero-background"
          style={{
            transform: `perspective(1000px) rotateY(${
              mousePosition.x * 5
            }deg) rotateX(${-mousePosition.y * 5}deg)`,
          }}
        >
          {/* Floating particles */}
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  "--delay": `${i * 0.2}s`,
                  "--duration": `${3 + Math.random() * 2}s`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Animated grid background */}
          <div className="grid-background">
            <div className="grid-lines-horizontal">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="grid-line horizontal"
                  style={{ "--index": i }}
                />
              ))}
            </div>
            <div className="grid-lines-vertical">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="grid-line vertical"
                  style={{ "--index": i }}
                />
              ))}
            </div>
          </div>

          {/* Holographic elements */}
          <div className="holographic-elements">
            <div className="holo-circle holo-1"></div>
            <div className="holo-circle holo-2"></div>
            <div className="holo-circle holo-3"></div>
            <div className="holo-hexagon"></div>
          </div>

          {/* Main content */}
          <div className="hero-text">
            <h1 className={`hero-title ${isLoaded ? "animate-in" : ""}`}>
              <span className="text-glitch" data-text="Hi, I'm Seif Ebeid">
                Hi, I'm Seif Ebeid
              </span>
            </h1>
            <h2 className={`hero-subtitle ${isLoaded ? "animate-in" : ""}`}>
              <span className="typing-animation">Full-Stack Developer</span>
              <span className="cursor">|</span>
            </h2>
          </div>

          <button
            className={`contact-btn ${isLoaded ? "animate-in" : ""}`}
            onClick={handleContactClick}
          >
            <span className="btn-text">Contact Me</span>
            <div className="btn-glow"></div>
            <div className="btn-particles">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="btn-particle" style={{ "--i": i }} />
              ))}
            </div>
          </button>

          {/* 3D floating elements */}
          <div className="floating-elements">
            <div className="floating-cube floating-1">
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face right"></div>
              <div className="cube-face left"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
            </div>
            <div className="floating-cube floating-2">
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face right"></div>
              <div className="cube-face left"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
            </div>
            <div className="floating-sphere floating-3"></div>
            <div className="floating-pyramid floating-4">
              <div className="pyramid-face face1"></div>
              <div className="pyramid-face face2"></div>
              <div className="pyramid-face face3"></div>
              <div className="pyramid-face face4"></div>
            </div>
          </div>

          {/* Energy waves */}
          <div className="energy-waves">
            <div className="wave wave-1"></div>
            <div className="wave wave-2"></div>
            <div className="wave wave-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
