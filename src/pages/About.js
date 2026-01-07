import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <Link to="/" className="nav-back">
        ← ہوم پیج
      </Link>

      <header className="about-header">
        <h1>🌙 اسلامی گائیڈ کے بارے میں</h1>
        <p className="subtitle">ایک مکمل اسلامی سہولت ایپ</p>
      </header>

      <div className="about-content">
        <section className="about-section">
          <div className="section-card">
            <div className="section-icon">🕌</div>
            <h2>ہمارا مشن</h2>
            <p>
              اسلامی گائیڈ کا مقصد ہر مسلمان کو روزمرہ کی اسلامی ضروریات کے لیے
              ایک مکمل پلیٹ فارم مہیا کرنا ہے۔ ہم آپ کی دینی ضروریات کو جدید
              ٹیکنالوجی کے ذریعے پورا کرنا چاہتے ہیں۔
            </p>
          </div>
        </section>

        <section className="features-section">
          <h2>✨ خصوصیات</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🕋</div>
              <h3>نماز کے اوقات</h3>
              <p>کراچی کے درست نماز کے اوقات کے ساتھ خودکار گھڑی</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📿</div>
              <h3>نماز کا طریقہ</h3>
              <p>قدم بہ قدم نماز سیکھیں عربی، اردو اور انگریزی میں</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📖</div>
              <h3>روزانہ دعائیں</h3>
              <p>ہر موقع کے لیے ضروری دعائیں ترجمہ اور تلفظ کے ساتھ</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🕌</div>
              <h3>ضروری احادیث</h3>
              <p>مستند حدیث کی کتابوں سے منتخب احادیث</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🧭</div>
              <h3>قبلہ فائنڈر</h3>
              <p>کسی بھی جگہ سے قبلہ کی سمت معلوم کریں</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📘</div>
              <h3>قرآنی آیات</h3>
              <p>روزانہ روحانی غذا کے لیے منتخب قرآنی آیات</p>
            </div>
          </div>
        </section>

        <section className="tech-section">
          <div className="section-card tech-card">
            <h2>💻 ٹیکنالوجی</h2>
            <p>یہ ویب ایپ جدید ترین ویب ٹیکنالوجیز پر بنائی گئی ہے:</p>

            <div className="tech-stack">
              <div className="tech-item">
                <span className="tech-logo">⚛️</span>
                <div className="tech-info">
                  <h4>React JS</h4>
                  <p>فرنٹ اینڈ لائبریری</p>
                </div>
              </div>

              <div className="tech-item">
                <span className="tech-logo">🎨</span>
                <div className="tech-info">
                  <h4>CSS3</h4>
                  <p>سٹائلنگ اور ڈیزائن</p>
                </div>
              </div>

              <div className="tech-item">
                <span className="tech-logo">🚀</span>
                <div className="tech-info">
                  <h4>React Router</h4>
                  <p>نیویگیشن</p>
                </div>
              </div>

              <div className="tech-item">
                <span className="tech-logo">📱</span>
                <div className="tech-info">
                  <h4>Responsive Design</h4>
                  <p>ہر ڈیوائس کے لیے موزوں</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="developer-section">
          <div className="section-card developer-card">
            <h2>👨‍💻 ڈویلپر</h2>
            <div className="developer-info">
              <div className="developer-avatar">💼</div>
              <div className="developer-details">
                <h3>ری ایکٹ پروجیکٹس</h3>
                <p className="developer-title">فرنٹ اینڈ ڈویلپر</p>
                <p className="developer-bio">
                  میں ایک پاکستانی ڈویلپر ہوں جو جدید ویب ٹیکنالوجیز کے ذریعے
                  اسلامی تعلیمات کو عام کرنا چاہتا ہوں۔ میرا مقصد ایسی
                  ایپلیکیشنز بنانا ہے جو دینی ضروریات کو آسان اور قابل رسائی
                  بنائیں۔
                </p>

                <div className="developer-skills">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">UI/UX</span>
                  <span className="skill-tag">Responsive</span>
                </div>
              </div>
            </div>

            <div className="project-details">
              <h4>📁 پروجیکٹ کی تفصیلات:</h4>
              <ul>
                <li>
                  <strong>پروجیکٹ:</strong> اسلامی گائیڈ ویب ایپ
                </li>
                <li>
                  <strong>ٹیک اسٹیک:</strong> React, CSS, React Router
                </li>
                <li>
                  <strong>مواد:</strong> نماز اوقات، دعائیں، احادیث، قرآن
                </li>
                <li>
                  <strong>زبان:</strong> اردو، عربی، انگریزی
                </li>
                <li>
                  <strong>اسٹیٹس:</strong> لائیو
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="future-plans">
          <div className="section-card">
            <h2>🚀 مستقبل کی منصوبہ بندی</h2>
            <p>ہماری آئندہ اپ ڈیٹس میں یہ خصوصیات شامل ہوں گی:</p>

            <div className="plans-grid">
              <div className="plan-item">
                <h4>📅 اسلامی کیلنڈر</h4>
                <p>ہجری کیلنڈر اور اہم اسلامی تاریخوں کی نشاندہی</p>
              </div>

              <div className="plan-item">
                <h4>🕌 مسجد تلاش کریں</h4>
                <p>قریبی مساجد کی لوکیشن اور اوقات</p>
              </div>

              <div className="plan-item">
                <h4>🛐 روزے کا وقت</h4>
                <p>روزے کے اوقات اور افطار/سحری کا ٹائمر</p>
              </div>

              <div className="plan-item">
                <h4>🌙 تسبیح کاؤنٹر</h4>
                <p>ڈیجیٹل تسبیح اور ذکر کاؤنٹر</p>
              </div>

              <div className="plan-item">
                <h4>🔔 نوٹیفکیشن</h4>
                <p>نماز کے وقت کی یاد دہانی</p>
              </div>

              <div className="plan-item">
                <h4>🌍 بین الاقوامی</h4>
                <p>دنیا بھر کے شہروں کے نماز اوقات</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="section-card contact-card">
            <h2>📞 رابطہ کریں</h2>
            <p>
              اگر آپ کے پاس کوئی تجویز، مشورہ یا سوال ہے تو ہم سے رابطہ کریں:
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon">📧</span>
                <div className="contact-info">
                  <h4>ای میل</h4>
                  <p>tahaahmed434@gmail.com</p>
                </div>
              </div>

              <div className="contact-method">
                <span className="contact-icon">💼</span>
                <div className="contact-info">
                  <h4>گٹ ہب</h4>
                  <p>https://github.com/beingtaha</p>
                </div>
              </div>

              <div className="contact-method">
                <span className="contact-icon">🔄</span>
                <div className="contact-info">
                  <h4>اپ ڈیٹس</h4>
                  <p>مستقبل میں مزید خصوصیات آنے والی ہیں</p>
                </div>
              </div>
            </div>

            <div className="feedback-form">
              <h4>💡 آپ کی رائے</h4>
              <p>ہمارے بارے میں آپ کی رائے ہمارے لیے بہت اہمیت رکھتی ہے۔</p>
              <button
                className="feedback-btn"
                onClick={() => alert("شکریہ! آپ کی رائے ہمارے لیے قیمتی ہے۔")}
              >
                رائے دیں
              </button>
            </div>
          </div>
        </section>

        <footer className="about-footer">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>🌙 اسلامی گائیڈ</h3>
              <p>آپ کی دینی سہولت</p>
            </div>

            <div className="footer-links">
              <Link to="/" className="footer-link">
                ہوم
              </Link>
              <Link to="/prayer-times" className="footer-link">
                نماز اوقات
              </Link>
              <Link to="/daily-duas" className="footer-link">
                دعائیں
              </Link>
              <Link to="/hadiths" className="footer-link">
                احادیث
              </Link>
            </div>

            <div className="footer-info">
              <p>
                © {new Date().getFullYear()} اسلامی گائیڈ۔ تمام حقوق محفوظ ہیں۔
              </p>
              <p className="footer-note">
                یہ ایک تعلیمی پروجیکٹ ہے اور مکمل اسلامی رہنمائی کے لیے معتبر
                علما سے رجوع کریں۔
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default About;
