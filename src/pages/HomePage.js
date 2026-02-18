import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import Hero from "../components/Home/Hero";
import PrayerWidget from "../components/Home/PrayerWidget";
import PillarsSection from "../components/Home/PillarsSection";
import AboutIslam from "../components/Home/AboutIslam";
import "./HomePage.css";

function HomePage() {
  const { language } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`home-page ${isDarkMode ? "dark" : "light"}`}>
      <main className="main-content">
        <Hero />
        <PrayerWidget />
        <PillarsSection />
        <AboutIslam />
      </main>
    </div>
  );
}

export default HomePage;
