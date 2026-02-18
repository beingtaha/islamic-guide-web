import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";
import { content } from "../../data/content";
import "./PillarsSection.css";

function PillarsSection() {
  const { language } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  const t = content[language];

  const pillars = [
    {
      id: 1,
      name: t.shahada,
      nameEn: "Shahada",
      desc: t.shahadaDesc,
      icon: "🕋",
      color: "#27ae60",
    },
    {
      id: 2,
      name: t.salah,
      nameEn: "Salah",
      desc: t.salahDesc,
      icon: "🕌",
      color: "#3498db",
    },
    {
      id: 3,
      name: t.zakat,
      nameEn: "Zakat",
      desc: t.zakatDesc,
      icon: "💰",
      color: "#e74c3c",
    },
    {
      id: 4,
      name: t.sawm,
      nameEn: "Sawm",
      desc: t.sawmDesc,
      icon: "🌙",
      color: "#f39c12",
    },
    {
      id: 5,
      name: t.hajj,
      nameEn: "Hajj",
      desc: t.hajjDesc,
      icon: "🕋",
      color: "#9b59b6",
    },
  ];

  return (
    <section
      id="pillars"
      className={`pillars-section ${isDarkMode ? "dark" : "light"}`}
    >
      <div className="pillars-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-icon">📿</span>
            {t.pillarsTitle}
          </h2>
          <p className="section-subtitle">
            {language === "urdu"
              ? "اسلام کی بنیاد پانچ ستونوں پر ہے"
              : "The foundation of Islam rests on five pillars"}
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="pillar-card">
              <div
                className="pillar-icon"
                style={{
                  background: `linear-gradient(135deg, ${pillar.color}20, ${pillar.color}40)`,
                }}
              >
                <span className="icon">{pillar.icon}</span>
              </div>
              <div className="pillar-content">
                <h3 className="pillar-name">{pillar.name}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
                <div className="pillar-number">{pillar.id}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="pillars-quote">
          <div className="quote-text">
            {language === "urdu"
              ? '"اسلام کی بنیاد پانچ چیزوں پر رکھی گئی ہے: توحید، نماز، زکوٰۃ، روزہ، حج"'
              : '"Islam is built upon five: to worship Allah and disbelieve in what is worshiped besides him, establishment of prayer, payment of zakat, pilgrimage to the House, and fasting Ramadan"'}
          </div>
          <div className="quote-author">- Prophet Muhammad ﷺ</div>
        </div>
      </div>
    </section>
  );
}

export default PillarsSection;
