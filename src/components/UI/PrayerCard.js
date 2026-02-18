import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./PrayerCard.css";

function PrayerCard({ prayer }) {
  const { language } = useContext(LanguageContext);

  const prayerName = language === "urdu" ? prayer.nameUrdu : prayer.name;

  return (
    <div className="prayer-card">
      <div className="prayer-icon">{prayer.icon}</div>
      <div className="prayer-info">
        <h3 className="prayer-name">{prayerName}</h3>
        <div className="prayer-time-single">
          <span className="time-value">{prayer.time}</span>
        </div>
      </div>
    </div>
  );
}

export default PrayerCard;
