import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import "./About.css";

function About() {
  const { isDarkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  // Force re-render on theme/language change
  useEffect(() => {}, [isDarkMode, language]);

  // Developer info (update with your details)
  const developerInfo = {
    name: "Taha Ahmed",
    title: language === "urdu" ? "فرنٹ اینڈ ڈویلپر" : "Frontend Developer",
    email: "tahaahmed434@gmail.com",
    phone: "+92 316 2020727",
    linkedin: "https://www.linkedin.com/in/tahaa-ahmed/",
    github: "https://github.com/beingtaha",
    bioUrdu:
      "میں ایک پاکستانی ڈویلپر ہوں جو جدید ویب ٹیکنالوجیز کے ذریعے اسلامی تعلیمات کو عام کرنا چاہتا ہوں۔ میرا مقصد ایسی ایپلیکیشنز بنانا ہے جو دینی ضروریات کو آسان اور قابل رسائی بنائیں۔",
    bioEng:
      "I am a Pakistani developer who wants to spread Islamic teachings through modern web technologies. My goal is to create applications that make religious needs easy and accessible.",
  };

  return (
    <div className={`about-container ${isDarkMode ? "dark" : "light"}`}>
      <Link to="/" className="nav-back">
        {language === "urdu" ? "← ہوم پیج" : "← Home"}
      </Link>

      <header className="about-header">
        <h1>
          {language === "urdu"
            ? "🌙 اسلامی گائیڈ کے بارے میں"
            : "🌙 About Islamic Guide"}
        </h1>
        <p className="subtitle">
          {language === "urdu"
            ? "ایک مکمل اسلامی سہولت ایپ"
            : "A Complete Islamic Companion App"}
        </p>
      </header>

      <div className="about-content">
        {/* Mission Section */}
        <section className="about-section">
          <div className="section-card">
            <div className="section-icon">🕌</div>
            <h2>{language === "urdu" ? "ہمارا مشن" : "Our Mission"}</h2>
            <p>
              {language === "urdu"
                ? "اسلامی گائیڈ کا مقصد ہر مسلمان کو روزمرہ کی اسلامی ضروریات کے لیے ایک مکمل پلیٹ فارم مہیا کرنا ہے۔ ہم آپ کی دینی ضروریات کو جدید ٹیکنالوجی کے ذریعے پورا کرنا چاہتے ہیں۔"
                : "Islamic Guide aims to provide every Muslim with a complete platform for their daily Islamic needs. We want to fulfill your religious needs through modern technology."}
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2>{language === "urdu" ? "✨ خصوصیات" : "✨ Features"}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🕋</div>
              <h3>{language === "urdu" ? "نماز کے اوقات" : "Prayer Times"}</h3>
              <p>
                {language === "urdu"
                  ? "کراچی کے درست نماز کے اوقات"
                  : "Accurate Karachi prayer times"}
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📿</div>
              <h3>{language === "urdu" ? "نماز کا طریقہ" : "Prayer Guide"}</h3>
              <p>
                {language === "urdu"
                  ? "قدم بہ قدم نماز سیکھیں"
                  : "Step-by-step prayer learning"}
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📖</div>
              <h3>{language === "urdu" ? "روزانہ دعائیں" : "Daily Duas"}</h3>
              <p>
                {language === "urdu"
                  ? "ہر موقع کے لیے ضروری دعائیں"
                  : "Essential duas for every occasion"}
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🕌</div>
              <h3>
                {language === "urdu" ? "ضروری احادیث" : "Essential Hadiths"}
              </h3>
              <p>
                {language === "urdu"
                  ? "مستند حدیث کی کتابوں سے منتخب احادیث"
                  : "Selected hadiths from authentic books"}
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📘</div>
              <h3>{language === "urdu" ? "قرآنی آیات" : "Quran Verses"}</h3>
              <p>
                {language === "urdu"
                  ? "روزانہ روحانی غذا کے لیے منتخب آیات"
                  : "Selected verses for daily spiritual nourishment"}
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌙</div>
              <h3>{language === "urdu" ? "ڈارک موڈ" : "Dark Mode"}</h3>
              <p>
                {language === "urdu"
                  ? "آنکھوں کو آرام دینے والا ڈارک موڈ"
                  : "Eye-friendly dark mode"}
              </p>
            </div>
          </div>
        </section>

        {/* Tech Section */}
        <section className="tech-section">
          <div className="section-card tech-card">
            <h2>{language === "urdu" ? "💻 ٹیکنالوجی" : "💻 Technology"}</h2>
            <p>
              {language === "urdu"
                ? "یہ ویب ایپ جدید ترین ویب ٹیکنالوجیز پر بنائی گئی ہے:"
                : "This web app is built with modern web technologies:"}
            </p>

            <div className="tech-stack">
              <div className="tech-item">
                <span className="tech-logo">⚛️</span>
                <div className="tech-info">
                  <h4>React JS</h4>
                  <p>
                    {language === "urdu"
                      ? "فرنٹ اینڈ لائبریری"
                      : "Frontend Library"}
                  </p>
                </div>
              </div>

              <div className="tech-item">
                <span className="tech-logo">🎨</span>
                <div className="tech-info">
                  <h4>CSS3</h4>
                  <p>
                    {language === "urdu"
                      ? "سٹائلنگ اور ڈیزائن"
                      : "Styling & Design"}
                  </p>
                </div>
              </div>

              <div className="tech-item">
                <span className="tech-logo">🚀</span>
                <div className="tech-info">
                  <h4>React Router</h4>
                  <p>{language === "urdu" ? "نیویگیشن" : "Navigation"}</p>
                </div>
              </div>

              <div className="tech-item">
                <span className="tech-logo">📱</span>
                <div className="tech-info">
                  <h4>Responsive Design</h4>
                  <p>
                    {language === "urdu"
                      ? "ہر ڈیوائس کے لیے موزوں"
                      : "Works on all devices"}
                  </p>
                </div>
              </div>

              <div className="tech-item">
                <span className="tech-logo">🌓</span>
                <div className="tech-info">
                  <h4>Dark/Light Mode</h4>
                  <p>
                    {language === "urdu"
                      ? "تھیم تبدیل کرنے کی سہولت"
                      : "Theme switching"}
                  </p>
                </div>
              </div>

              <div className="tech-item">
                <span className="tech-logo">🔤</span>
                <div className="tech-info">
                  <h4>Urdu/English</h4>
                  <p>
                    {language === "urdu"
                      ? "دو لسانی تعاون"
                      : "Bilingual support"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="developer-section">
          <div className="section-card developer-card">
            <h2>{language === "urdu" ? "👨‍💻 ڈویلپر" : "👨‍💻 Developer"}</h2>
            <div className="developer-info">
              <div className="developer-avatar">👨‍💻</div>
              <div className="developer-details">
                <h3>{developerInfo.name}</h3>
                <p className="developer-title">{developerInfo.title}</p>
                <p className="developer-bio">
                  {language === "urdu"
                    ? developerInfo.bioUrdu
                    : developerInfo.bioEng}
                </p>

                <div className="developer-skills">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">UI/UX</span>
                  <span className="skill-tag">Responsive</span>
                </div>
              </div>
            </div>

            <div className="project-details">
              <h4>
                {language === "urdu"
                  ? "📁 پروجیکٹ کی تفصیلات:"
                  : "📁 Project Details:"}
              </h4>
              <ul>
                <li>
                  <strong>
                    {language === "urdu" ? "پروجیکٹ:" : "Project:"}
                  </strong>
                  {language === "urdu"
                    ? "اسلامی گائیڈ ویب ایپ"
                    : "Islamic Guide Web App"}
                </li>
                <li>
                  <strong>
                    {language === "urdu" ? "ٹیک اسٹیک:" : "Tech Stack:"}
                  </strong>
                  React, CSS, React Router
                </li>
                <li>
                  <strong>{language === "urdu" ? "مواد:" : "Content:"}</strong>
                  {language === "urdu"
                    ? "نماز اوقات، دعائیں، احادیث، قرآن"
                    : "Prayer times, Duas, Hadiths, Quran"}
                </li>
                <li>
                  <strong>{language === "urdu" ? "زبان:" : "Language:"}</strong>
                  {language === "urdu"
                    ? "اردو، عربی، انگریزی"
                    : "Urdu, Arabic, English"}
                </li>
                <li>
                  <strong>{language === "urdu" ? "اسٹیٹس:" : "Status:"}</strong>
                  {language === "urdu" ? "لائیو" : "Live"}
                </li>
                <li>
                  <strong>{language === "urdu" ? "ورژن:" : "Version:"}</strong>{" "}
                  1.0.0
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="section-card contact-card">
            <h2>{language === "urdu" ? "📞 رابطہ کریں" : "📞 Contact Us"}</h2>
            <p>
              {language === "urdu"
                ? "اگر آپ کے پاس کوئی تجویز، مشورہ یا سوال ہے تو ہم سے رابطہ کریں:"
                : "If you have any suggestions, feedback, or questions, please contact us:"}
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon">📧</span>
                <div className="contact-info">
                  <h4>{language === "urdu" ? "ای میل" : "Email"}</h4>
                  <p>{developerInfo.email}</p>
                </div>
              </div>

              <div className="contact-method">
                <span className="contact-icon">📞</span>
                <div className="contact-info">
                  <h4>{language === "urdu" ? "فون" : "Phone"}</h4>
                  <p>{developerInfo.phone}</p>
                </div>
              </div>

              <div className="contact-method">
                <span className="contact-icon">🔗</span>
                <div className="contact-info">
                  <h4>LinkedIn</h4>
                  <a
                    href={developerInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {developerInfo.linkedin}
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <span className="contact-icon">💻</span>
                <div className="contact-info">
                  <h4>GitHub</h4>
                  <a
                    href={developerInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {developerInfo.github}
                  </a>
                </div>
              </div>
            </div>

            <div className="feedback-form">
              <h4>
                {language === "urdu" ? "💡 آپ کی رائے" : "💡 Your Feedback"}
              </h4>
              <p>
                {language === "urdu"
                  ? "ہمارے بارے میں آپ کی رائے ہمارے لیے بہت اہمیت رکھتی ہے۔"
                  : "Your feedback about our app is very important to us."}
              </p>
              <button
                className="feedback-btn"
                onClick={() =>
                  alert(
                    language === "urdu"
                      ? "شکریہ! آپ کی رائے ہمارے لیے قیمتی ہے۔"
                      : "Thank you! Your feedback is valuable to us.",
                  )
                }
              >
                {language === "urdu" ? "رائے دیں" : "Give Feedback"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
