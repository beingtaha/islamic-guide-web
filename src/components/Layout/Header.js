import React, { useState, useContext } from "react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Add this state

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isDarkMode ? "dark" : "light"}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMobileMenu}>
            <span className="logo-icon">🕌</span>
            <span className="logo-text">Islamic Guide</span>
          </Link>
        </div>

        {/* Navigation Menu - Add active class based on state */}
        <nav className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={closeMobileMenu}>
            {t.home}
          </Link>
          <Link
            to="/prayer-guide"
            className="nav-link"
            onClick={closeMobileMenu}
          >
            {t.prayerGuide}
          </Link>
          <Link to="/daily-duas" className="nav-link" onClick={closeMobileMenu}>
            {t.dailyDuas}
          </Link>
          <Link to="/hadiths" className="nav-link" onClick={closeMobileMenu}>
            {t.hadiths}
          </Link>
          <Link
            to="/quran-verses"
            className="nav-link"
            onClick={closeMobileMenu}
          >
            {t.quranVerses}
          </Link>
          <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
            {t.about}
          </Link>
        </nav>

        <div className="header-controls">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button - Add onClick handler */}
        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
