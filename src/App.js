import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import BackToTop from "./components/UI/BackToTop";
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

// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes it smooth!
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop /> {/* Add this component */}
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
            <BackToTop />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
