import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import HomePage from "./pages/HomePage";
import PrayerGuide from "./pages/PrayerGuide";
import DailyDuas from "./pages/DailyDuas";
import Hadiths from "./pages/Hadiths";
import QuranVerses from "./pages/QuranVerses";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/prayer-guide" element={<PrayerGuide />} />
              <Route path="/daily-duas" element={<DailyDuas />} />
              <Route path="/hadiths" element={<Hadiths />} />
              <Route path="/quran-verses" element={<QuranVerses />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
