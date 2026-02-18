import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";
import { content } from "../../data/content";
import "./AboutIslam.css";

function AboutIslam() {
  const { language } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  const t = content[language];

  return (
    <section className={`about-islam ${isDarkMode ? "dark" : "light"}`}>
      <div className="about-container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="about-title">
              <span className="title-icon">📖</span>
              {t.aboutIslamTitle}
            </h2>
            <p className="about-description">{t.aboutIslamDesc}</p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">1.8B+</span>
                <span className="stat-label">
                  {language === "urdu" ? "مسلمان" : "Muslims"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">195+</span>
                <span className="stat-label">
                  {language === "urdu" ? "ممالک" : "Countries"}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1400+</span>
                <span className="stat-label">
                  {language === "urdu" ? "سال" : "Years"}
                </span>
              </div>
            </div>

            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">🤝</span>
                <div className="feature-text">
                  <h4>
                    {language === "urdu" ? "امن کا دین" : "Religion of Peace"}
                  </h4>
                  <p>
                    {language === "urdu"
                      ? "اسلام کا مطلب ہے امن و سلامتی"
                      : "Islam means peace and submission to Allah"}
                  </p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">❤️</span>
                <div className="feature-text">
                  <h4>{language === "urdu" ? "رحمت" : "Mercy"}</h4>
                  <p>
                    {language === "urdu"
                      ? "اللہ رحمان و رحیم ہے"
                      : "Allah is Most Gracious, Most Merciful"}
                  </p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">🕊️</span>
                <div className="feature-text">
                  <h4>{language === "urdu" ? "بھائی چارہ" : "Brotherhood"}</h4>
                  <p>
                    {language === "urdu"
                      ? "تمام مسلمان ایک جسم کی مانند ہیں"
                      : "All Muslims are like one body"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <div className="main-icon">🕋</div>
              <div className="floating-icons">
                <span className="float-icon">🕌</span>
                <span className="float-icon">📿</span>
                <span className="float-icon">🌙</span>
                <span className="float-icon">⭐</span>
              </div>
              <div className="pattern-dots"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIslam;
