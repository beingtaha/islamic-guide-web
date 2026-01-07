import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrayerTimes from "./pages/PrayerTimes";
import PrayerGuide from "./pages/PrayerGuide";
import DailyDuas from "./pages/DailyDuas";
import Hadiths from "./pages/Hadiths";
import QiblaFinder from "./pages/QiblaFinder";
import QuranVerses from "./pages/QuranVerses";
import About from "./pages/About";
import "./App.css"; // ✅ CORRECTED

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prayer-times" element={<PrayerTimes />} />
          <Route path="/prayer-guide" element={<PrayerGuide />} />
          <Route path="/daily-duas" element={<DailyDuas />} />
          <Route path="/hadiths" element={<Hadiths />} />
          <Route path="/qibla-finder" element={<QiblaFinder />} />
          <Route path="/quran-verses" element={<QuranVerses />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
