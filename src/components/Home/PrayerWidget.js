import React, { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from "../../context/ThemeContext";
import { content } from "../../data/content";
import { prayerTimes, updatePrayerTimes } from "../../data/prayerTimes";
import PrayerCard from "../UI/PrayerCard";
import "./PrayerWidget.css";

function PrayerWidget() {
  const { language } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  const t = content[language];
  const [times, setTimes] = useState(prayerTimes);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const loadPrayerTimes = async () => {
      setLoading(true);
      try {
        const updated = await updatePrayerTimes();
        setTimes(updated);
        const now = new Date();
        // Format: "Feb 18, 2026, 10:30 AM"
        const formattedTime = now.toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });
        setLastUpdated(formattedTime);
      } catch (error) {
        console.error("Failed to load prayer times");
      } finally {
        setLoading(false);
      }
    };

    loadPrayerTimes();

    // Refresh every hour
    const interval = setInterval(loadPrayerTimes, 3600000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="prayer-times"
      className={`prayer-widget ${isDarkMode ? "dark" : "light"}`}
    >
      <div className="widget-container">
        <div className="widget-header">
          <h2 className="widget-title">
            <span className="title-icon">🕋</span>
            {t.prayerTimesTitle}
          </h2>
          <p className="widget-subtitle">
            {language === "urdu"
              ? "حماری ویب سے براہ راست اوقات"
              : "Live times from Hamariweb"}
          </p>
          {/* Last Updated Timestamp */}
          {!loading && lastUpdated && (
            <div className="last-updated">
              <span className="update-icon">⏱️</span>
              <span>
                {language === "urdu"
                  ? `آخری اپ ڈیٹ: ${lastUpdated}`
                  : `Last updated: ${lastUpdated}`}
              </span>
            </div>
          )}
        </div>

        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>{language === "urdu" ? "لوڈ ہو رہا ہے..." : "Loading..."}</p>
          </div>
        ) : (
          <div className="prayer-cards-grid">
            {times.map((prayer) => (
              <PrayerCard key={prayer.id} prayer={prayer} />
            ))}
          </div>
        )}

        <div className="widget-note">
          <span className="note-icon">ℹ️</span>
          <p>
            {language === "urdu"
              ? "یہ اوقات حماری ویب سے براہ راست حاصل کیے گئے ہیں اور ہر گھنٹے اپ ڈیٹ ہوتے ہیں۔"
              : "These times are fetched directly from Hamariweb and update hourly."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default PrayerWidget;
