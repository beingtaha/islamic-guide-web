import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";
import { content } from "../../data/content";
import ThemeToggle from "../UI/ThemeToggle";
import LanguageToggle from "../UI/LanguageToggle";
import "./Header.css";

function Header() {
  const { language } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  const t = content[language];

  return (
    <header className={`header ${isDarkMode ? "dark" : "light"}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <span className="logo-icon">🕌</span>
            <span className="logo-text">Islamic Guide</span>
          </Link>
        </div>

        <nav className="nav-menu">
          <Link to="/" className="nav-link">
            {t.home}
          </Link>
          <Link to="/prayer-guide" className="nav-link">
            {t.prayerGuide}
          </Link>
          <Link to="/daily-duas" className="nav-link">
            {t.dailyDuas}
          </Link>
          <Link to="/hadiths" className="nav-link">
            {t.hadiths}
          </Link>
          <Link to="/quran-verses" className="nav-link">
            {t.quranVerses}
          </Link>
          <Link to="/about" className="nav-link">
            {t.about}
          </Link>
        </nav>

        <div className="header-controls">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <button className="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
