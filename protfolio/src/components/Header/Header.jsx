import React from "react";
import "./Header.css";
import Logo from "../../assets/icon.png";

const Header = () => {
  const handleDownloadResume = () => {
    const resumeUrl =
      "https://drive.google.com/uc?export=download&id=1mOepzsZ87eMWHp6XBPq9k97CPidjA71D";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Seif_Ebeid_Resume.pdf"; // Optional name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <img className="logo" src={Logo} alt="" />
        </div>
        <h2 className="header-title">Seif Ebeid</h2>
      </div>
      <div className="header-right">
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="resume-btn" onClick={() => handleDownloadResume()}>
          <span>Resume</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
