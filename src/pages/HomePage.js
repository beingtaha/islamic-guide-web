import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>🌙 Islamic Guide</h1>
        <p>Your Daily Islamic Companion</p>
      </header>

      <nav className="navigation">
        <div className="nav-grid">
          <Link to="/prayer-times" className="nav-card">
            <div className="icon">🕋</div>
            <h3>Namaz Timings</h3>
            <p>Karachi Updated Times</p>
          </Link>

          <Link to="/prayer-guide" className="nav-card">
            <div className="icon">📿</div>
            <h3>Namaz Ka Tarika</h3>
            <p>Step-by-Step Guide</p>
          </Link>

          <Link to="/daily-duas" className="nav-card">
            <div className="icon">📖</div>
            <h3>Daily Duas</h3>
            <p>Roz ki Zindagi</p>
          </Link>

          <Link to="/hadiths" className="nav-card">
            <div className="icon">🕌</div>
            <h3>Hadiths</h3>
            <p>Zaroori Hadiths</p>
          </Link>

          <Link to="/qibla-finder" className="nav-card">
            <div className="icon">🧭</div>
            <h3>Qibla Finder</h3>
            <p>Find Qibla Direction</p>
          </Link>

          <Link to="/quran-verses" className="nav-card">
            <div className="icon">📘</div>
            <h3>Quran Verses</h3>
            <p>Daily Inspirations</p>
          </Link>

          <Link to="/about" className="nav-card">
            <div className="icon">🌙</div>
            <h3>About App</h3>
            <p>Information & Features</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default HomePage;
