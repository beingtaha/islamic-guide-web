import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PrayerTimes.css";

function PrayerTimes() {
  // Karachi coordinates
  // Line 8-16 ko yeh se replace karein:
  const [karachiTimings] = useState({
    date: new Date().toLocaleDateString("ur-PK", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    fajr: "5:15 AM",
    sunrise: "6:45 AM",
    dhuhr: "12:25 PM",
    asr: "4:05 PM",
    maghrib: "6:35 PM",
    isha: "7:50 PM",
  });

  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextPrayerInfo, setNextPrayerInfo] = useState({
    name: "",
    time: "",
    remaining: "",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      calculateNextPrayer();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculateNextPrayer = () => {
    const now = currentTime;
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    // Line 44-52 ko yeh se replace karein:
    const prayerTimes = [
      { name: "Fajr", time: "5:15", display: "5:15 AM", minutes: 5 * 60 + 15 },
      {
        name: "Dhuhr",
        time: "12:25",
        display: "12:25 PM",
        minutes: 12 * 60 + 25,
      },
      { name: "Asr", time: "16:05", display: "4:05 PM", minutes: 16 * 60 + 5 },
      {
        name: "Maghrib",
        time: "18:35",
        display: "6:35 PM",
        minutes: 18 * 60 + 35,
      },
      {
        name: "Isha",
        time: "19:50",
        display: "7:50 PM",
        minutes: 19 * 60 + 50,
      },
      { name: "Fajr", time: "5:15", display: "5:15 AM", minutes: 24 * 60 + 15 }, // Next day Fajr
    ];

    const nextPrayer =
      prayerTimes.find((p) => p.minutes > currentMinutes) || prayerTimes[0];
    const remainingMinutes = nextPrayer.minutes - currentMinutes;
    const hours = Math.floor(remainingMinutes / 60);
    const minutes = remainingMinutes % 60;

    setNextPrayerInfo({
      name: nextPrayer.name,
      time: nextPrayer.display,
      remaining: `${hours}h ${minutes}m`,
    });
  };

  const prayerNames = {
    fajr: "Fajr",
    sunrise: "Sunrise",
    dhuhr: "Dhuhr",
    asr: "Asr",
    maghrib: "Maghrib",
    isha: "Isha",
  };

  return (
    <div className="prayer-container">
      <Link to="/" className="nav-back">
        ← Back to Home
      </Link>

      <h1>🕋 Karachi Namaz Timings</h1>
      <p className="date-display">{karachiTimings.date}</p>

      <div className="current-time-section">
        <div className="time-card">
          <h2>⏰ Current Time</h2>
          <p className="current-time">
            {currentTime.toLocaleTimeString("en-PK", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </p>
        </div>

        <div className="next-prayer-card">
          <h2>⏳ Next Prayer</h2>
          <div className="prayer-highlight">
            <h3>{nextPrayerInfo.name}</h3>
            <p className="prayer-time">{nextPrayerInfo.time}</p>
            <p className="remaining-time">
              Starts in: {nextPrayerInfo.remaining}
            </p>
          </div>
        </div>
      </div>

      <div className="prayer-times-grid">
        {Object.entries(karachiTimings).map(
          ([key, time]) =>
            key !== "date" && (
              <div key={key} className={`prayer-time-card ${key}`}>
                <div className="prayer-icon">
                  {key === "fajr" && "🌅"}
                  {key === "sunrise" && "☀️"}
                  {key === "dhuhr" && "☀️"}
                  {key === "asr" && "⛅"}
                  {key === "maghrib" && "🌇"}
                  {key === "isha" && "🌙"}
                </div>
                <h3>{prayerNames[key]}</h3>
                <p className="time">{time}</p>
              </div>
            )
        )}
      </div>

      <div className="note-section">
        <p>
          Note: These are approximate timings for Karachi. For exact timings,
          please refer to your local mosque.
        </p>
      </div>
    </div>
  );
}

export default PrayerTimes;
