import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";
import { content } from "../../data/content";
import "./Hero.css";

function Hero() {
  const { language } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  const t = content[language];

  return (
    <section className={`hero ${isDarkMode ? "dark" : "light"}`}>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="salam">{t.welcome}</span>
            <span className="sub-title">{t.welcomeSub}</span>
          </h1>
          <p className="hero-description">{t.welcomeDesc}</p>
          <div className="hero-buttons">
            <a href="#prayer-times" className="btn btn-primary">
              {language === "urdu" ? "اوقات نماز" : "Prayer Times"}
            </a>
            <a href="#pillars" className="btn btn-secondary">
              {language === "urdu" ? "پانچ ستون" : "5 Pillars"}
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-elements">
            <span className="floating-icon">🕋</span>
            <span className="floating-icon">🕌</span>
            <span className="floating-icon">📿</span>
            <span className="floating-icon">🌙</span>
          </div>
        </div>
      </div>

      <div className="hero-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </section>
  );
}

export default Hero;
