import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";
import { content } from "../../data/content";
import "./Footer.css";

function Footer() {
  const { language } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  const t = content[language];

  const contactInfo = {
    name: "Taha Ahmed",
    email: "tahaahmed434@gmail.com",
    phone: "+92 316 2020727",
    linkedin: "https://www.linkedin.com/in/tahaa-ahmed/",
    github: "https://github.com/beingtaha",
  };

  return (
    <footer className={`footer ${isDarkMode ? "dark" : "light"}`}>
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-title">{t.contact}</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">👤</span>
              <span>{contactInfo.name}</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <div className="footer-links">
            <Link to="/prayer-times">{t.prayerTimes}</Link>
            <Link to="/prayer-guide">{t.prayerGuide}</Link>
            <Link to="/daily-duas">{t.dailyDuas}</Link>
            <Link to="/hadiths">{t.hadiths}</Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3 className="footer-title">Social Links</h3>
          <div className="social-links">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <span className="social-icon">🔗</span>
              <span>LinkedIn</span>
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <span className="social-icon">💻</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {contactInfo.name}. {t.copyright}
        </p>
        <p className="footer-note">Made with ❤️ for the Muslim Ummah</p>
      </div>
    </footer>
  );
}

export default Footer;
