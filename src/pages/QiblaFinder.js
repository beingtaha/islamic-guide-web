import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./QiblaFinder.css";

function QiblaFinder() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [qiblaDirection, setQiblaDirection] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [usingCurrentLocation, setUsingCurrentLocation] = useState(false);
  const [error, setError] = useState("");

  // Qibla coordinates (Kaaba in Mecca)
  const QIBLA_LAT = 21.4225;
  const QIBLA_LONG = 39.8262;

  // Calculate Qibla direction
  const calculateQibla = (lat, long) => {
    const latRad = (lat * Math.PI) / 180;
    const longRad = (long * Math.PI) / 180;
    const qiblaLatRad = (QIBLA_LAT * Math.PI) / 180;
    const qiblaLongRad = (QIBLA_LONG * Math.PI) / 180;

    const y = Math.sin(qiblaLongRad - longRad);
    const x =
      Math.cos(latRad) * Math.tan(qiblaLatRad) -
      Math.sin(latRad) * Math.cos(qiblaLongRad - longRad);

    let qiblaAngle = Math.atan2(y, x) * (180 / Math.PI);
    qiblaAngle = (qiblaAngle + 360) % 360;

    return Math.round(qiblaAngle);
  };

  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("آپ کا براؤزر لوکیشن سپورٹ نہیں کرتا");
      return;
    }

    setIsLoading(true);
    setError("");
    setUsingCurrentLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        setLatitude(lat.toFixed(6));
        setLongitude(long.toFixed(6));
        const direction = calculateQibla(lat, long);
        setQiblaDirection(direction);
        setIsLoading(false);
      },
      (err) => {
        setIsLoading(false);
        setUsingCurrentLocation(false);
        if (err.code === 1) {
          setError(
            "لوکیشن کی اجازت نہیں دی گئی۔ براہ کرم دستی طور پر کوآرڈینیٹس درج کریں۔"
          );
        } else {
          setError(
            "لوکیشن حاصل کرنے میں مسئلہ۔ براہ کرم دستی طور پر کوآرڈینیٹس درج کریں۔"
          );
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const handleManualCalculate = (e) => {
    e.preventDefault();
    setError("");

    if (!latitude || !longitude) {
      setError("براہ کرم عرض بلد اور طول بلد درج کریں");
      return;
    }

    const lat = parseFloat(latitude);
    const long = parseFloat(longitude);

    if (isNaN(lat) || isNaN(long)) {
      setError("غلط کوآرڈینیٹس۔ براہ کرم نمبر درج کریں");
      return;
    }

    if (lat < -90 || lat > 90) {
      setError("عرض بلد -90 سے 90 کے درمیان ہونا چاہیے");
      return;
    }

    if (long < -180 || long > 180) {
      setError("طول بلد -180 سے 180 کے درمیان ہونا چاہیے");
      return;
    }

    const direction = calculateQibla(lat, long);
    setQiblaDirection(direction);
    setUsingCurrentLocation(false);
  };

  const getDirectionName = (angle) => {
    const directions = [
      "شمال",
      "شمال مشرق",
      "مشرق",
      "جنوب مشرق",
      "جنوب",
      "جنوب مغرب",
      "مغرب",
      "شمال مغرب",
    ];
    const index = Math.round(angle / 45) % 8;
    return directions[index];
  };

  const getCompassPoint = (angle) => {
    const points = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(angle / 45) % 8;
    return points[index];
  };

  // Karachi coordinates as default
  useEffect(() => {
    const karachiLat = 24.8607;
    const karachiLong = 67.0011;
    const direction = calculateQibla(karachiLat, karachiLong);
    setQiblaDirection(direction);
    setLatitude(karachiLat.toFixed(6));
    setLongitude(karachiLong.toFixed(6));
  }, []);

  return (
    <div className="qibla-container">
      <Link to="/" className="nav-back">
        ← ہوم پیج
      </Link>

      <header className="qibla-header">
        <h1>🧭 قبلہ فائنڈر</h1>
        <p className="subtitle">کسی بھی جگہ سے قبلہ کی سمت معلوم کریں</p>
      </header>

      <div className="qibla-content">
        <div className="input-section">
          <div className="section-card">
            <h2>📍 اپنی لوکیشن درج کریں</h2>

            <button
              className="current-location-btn"
              onClick={handleGetCurrentLocation}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  لوکیشن حاصل کی جا رہی ہے...
                </>
              ) : (
                <>📍 موجودہ لوکیشن استعمال کریں</>
              )}
            </button>

            <p className="or-text">یا</p>

            <form onSubmit={handleManualCalculate} className="coordinates-form">
              <div className="input-group">
                <label htmlFor="latitude">عرض بلد (Latitude):</label>
                <input
                  type="text"
                  id="latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  placeholder="مثال: 24.8607"
                />
                <span className="input-hint">-90 سے 90 کے درمیان</span>
              </div>

              <div className="input-group">
                <label htmlFor="longitude">طول بلد (Longitude):</label>
                <input
                  type="text"
                  id="longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  placeholder="مثال: 67.0011"
                />
                <span className="input-hint">-180 سے 180 کے درمیان</span>
              </div>

              {error && <div className="error-message">{error}</div>}

              <button type="submit" className="calculate-btn">
                🧭 قبلہ کی سمت معلوم کریں
              </button>
            </form>

            <div className="city-examples">
              <h3>مشہور شہروں کے کوآرڈینیٹس:</h3>
              <div className="city-buttons">
                <button
                  onClick={() => {
                    setLatitude("24.8607");
                    setLongitude("67.0011");
                    setError("");
                  }}
                >
                  کراچی
                </button>

                <button
                  onClick={() => {
                    setLatitude("33.6844");
                    setLongitude("73.0479");
                    setError("");
                  }}
                >
                  اسلام آباد
                </button>

                <button
                  onClick={() => {
                    setLatitude("31.5497");
                    setLongitude("74.3436");
                    setError("");
                  }}
                >
                  لاہور
                </button>

                <button
                  onClick={() => {
                    setLatitude("21.4225");
                    setLongitude("39.8262");
                    setError("");
                  }}
                >
                  مکہ مکرمہ
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="result-section">
          {qiblaDirection !== null && (
            <div className="section-card result-card">
              <h2>🧭 قبلہ کی سمت</h2>

              <div className="compass-container">
                <div className="compass">
                  <div
                    className="compass-needle"
                    style={{ transform: `rotate(${qiblaDirection}deg)` }}
                  >
                    <div className="needle"></div>
                    <div className="qibla-marker">🕋</div>
                  </div>
                  <div className="compass-dial">
                    <span className="direction-n">N</span>
                    <span className="direction-e">E</span>
                    <span className="direction-s">S</span>
                    <span className="direction-w">W</span>
                  </div>
                </div>
              </div>

              <div className="direction-details">
                <div className="detail-item">
                  <span className="detail-label">زاویہ:</span>
                  <span className="detail-value">{qiblaDirection}°</span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">سمت:</span>
                  <span className="detail-value">
                    {getDirectionName(qiblaDirection)} (
                    {getCompassPoint(qiblaDirection)})
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">مقام:</span>
                  <span className="detail-value">
                    {usingCurrentLocation
                      ? "آپ کی موجودہ لوکیشن"
                      : "دستی طور پر درج کردہ"}
                  </span>
                </div>

                <div className="detail-item">
                  <span className="detail-label">کوآرڈینیٹس:</span>
                  <span className="detail-value">
                    {latitude}, {longitude}
                  </span>
                </div>
              </div>

              <div className="prayer-instructions">
                <h3>📝 قبلہ تلاش کرنے کے طریقے:</h3>
                <ul>
                  <li>کمپاس استعمال کریں اور {qiblaDirection}° پر سیٹ کریں</li>
                  <li>مثالی: سورج یا ستاروں کی مدد سے سمت معلوم کریں</li>
                  <li>موبائل ایپس: قبلہ فائنڈر ایپس استعمال کریں</li>
                  <li>مسجد: قریبی مسجد کی سمت دیکھیں</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="qibla-info">
        <div className="info-section">
          <h3>💡 قبلہ کے بارے میں معلومات:</h3>
          <div className="info-grid">
            <div className="info-card">
              <h4>قبلہ کیا ہے؟</h4>
              <p>
                قبلہ مسلمانوں کی عبادت کی سمت ہے جو خانہ کعبہ، مکہ مکرمہ میں
                واقع ہے۔
              </p>
            </div>

            <div className="info-card">
              <h4>قبلہ کی اہمیت</h4>
              <p>ہر مسلمان پر فرض ہے کہ نماز قبلہ کی طرف رخ کرکے پڑھے۔</p>
            </div>

            <div className="info-card">
              <h4>صحیح سمت</h4>
              <p>
                اگر قبلہ کی صحیح سمت معلوم نہ ہو تو اندازے سے نماز پڑھ سکتے ہیں۔
              </p>
            </div>
          </div>
        </div>

        <div className="note-box">
          <p>
            <strong>نوٹ:</strong> یہ حساب کتاب بنیادی ہے۔ حتمی سمت کے لیے ہمیشہ
            معتبر کمپاس یا مقامی مسجد سے تصدیق کریں۔
          </p>
        </div>
      </footer>
    </div>
  );
}

export default QiblaFinder;
