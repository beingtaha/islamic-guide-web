import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DailyDuas.css";

function DailyDuas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const duas = [
    {
      id: 1,
      category: "morning",
      title: "صبح کی دعا",
      arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ",
      transliteration: "Asbahna wa asbahal mulku lillah, walhamdu lillah",
      translation:
        "ہم صبح کو پہنچے اور پوری بادشاہت اللہ کے لیے ہے، اور سب تعریف اللہ کے لیے ہے",
      pronunciation: "اسبحنا وأصبح الملك لله، والحمد لله",
      benefits: "دن کی شروع برکت سے ہوتی ہے، ہر برائی سے حفاظت",
    },
    {
      id: 2,
      category: "morning",
      title: "گھر سے نکلتے وقت",
      arabic:
        "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
      transliteration:
        "Bismillah, tawakkaltu alallah, wa la hawla wa la quwwata illa billah",
      translation:
        "اللہ کے نام سے، میں نے اللہ پر بھروسہ کیا، اور کوئی طاقت اور قوت نہیں مگر اللہ کی مدد سے",
      pronunciation: "بسم الله، توکلت على الله، ولا حول ولا قوة إلا بالله",
      benefits: "سفر میں حفاظت، ہر مشکل سے بچاؤ",
    },
    {
      id: 3,
      category: "eating",
      title: "کھانا کھانے سے پہلے",
      arabic: "بِسْمِ اللَّهِ",
      transliteration: "Bismillah",
      translation: "اللہ کے نام سے (شروع کرتا ہوں)",
      pronunciation: "بسم الله",
      benefits: "کھانا برکت والا ہوتا ہے، شیطان کھانے میں شریک نہیں ہوتا",
    },
    {
      id: 4,
      category: "eating",
      title: "کھانا کھا کر",
      arabic:
        "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
      transliteration:
        "Alhamdulillahil ladhi at'amana wa saqana wa ja'alana muslimin",
      translation:
        "سب تعریف اس اللہ کے لیے ہے جس نے ہمیں کھلایا، پلایا اور ہمیں مسلمان بنایا",
      pronunciation: "الحمد لله الذي أطعمنا وسقانا وجعلنا مسلمين",
      benefits: "شکر ادا ہوتا ہے، رزق میں اضافہ ہوتا ہے",
    },
    {
      id: 5,
      category: "sleep",
      title: "سونے سے پہلے",
      arabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ",
      transliteration: "Bismika rabbi wada'tu janbi, wa bika arfa'uhu",
      translation:
        "اے میرے رب! تیرے نام سے میں نے اپنا پہلو (سونے کے لیے) گرایا اور تیرے ہی نام سے میں اسے اٹھاؤں گا",
      pronunciation: "باسمك ربي وضعت جنبي، وبك أرفعه",
      benefits: "نیند میں حفاظت، بری اولاد سے بچاؤ",
    },
    {
      id: 6,
      category: "sleep",
      title: "صبح بستر سے اٹھ کر",
      arabic:
        "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
      transliteration:
        "Alhamdulillahil ladhi ahyana ba'da ma amatana wa ilaihin nushur",
      translation:
        "سب تعریف اللہ ہی کے لیے ہے جس نے ہمیں موت کے بعد زندہ کیا اور اسی کی طرف اٹھنا ہے",
      pronunciation: "الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور",
      benefits: "دن کی شروع شکر سے، نیند کا احسان ادا",
    },
    {
      id: 7,
      category: "travel",
      title: "سفر شروع کرتے وقت",
      arabic:
        "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ",
      transliteration:
        "Subhanalladhi sakhkhara lana hadha wa ma kunna lahu muqrinin",
      translation:
        "پاک ہے وہ (اللہ) جس نے اس (سواری) کو ہمارے قبول میں کر دیا اور ہم اس کے قابل نہ تھے",
      pronunciation: "سبحان الذي سخر لنا هذا وما كنا له مقرنين",
      benefits: "سفر میں امن، سفر آسان ہوتا ہے",
    },
    {
      id: 8,
      category: "study",
      title: "پڑھنے کی دعا",
      arabic: "رَبِّ زِدْنِي عِلْمًا",
      transliteration: "Rabbi zidni ilma",
      translation: "اے میرے رب! میرے علم میں اضافہ فرما",
      pronunciation: "رب زدني علما",
      benefits: "علم میں برکت، سمجھ میں آسانی",
    },
    {
      id: 9,
      category: "difficulty",
      title: "مشکل وقت کی دعا",
      arabic:
        "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
      transliteration: "La ilaha illa anta subhanaka inni kuntu minaz zalimin",
      translation:
        "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بیشک میں ظالموں میں سے تھا",
      pronunciation: "لا إله إلا أنت سبحانك إني كنت من الظالمين",
      benefits: "مشکل آسان ہوتی ہے، غم دور ہوتا ہے",
    },
    {
      id: 10,
      category: "health",
      title: "بیماری کی دعا",
      arabic:
        "أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ",
      transliteration: "As'alullahal azim rabbal arshil azim an yashfiyak",
      translation:
        "میں اللہ عظیم سے، عرش عظیم کے رب سے، تمہیں شفا دینے کے لیے دعا کرتا ہوں",
      pronunciation: "أسأل الله العظيم رب العرش العظيم أن يشفيك",
      benefits: "شفا ملتی ہے، تکلیف کم ہوتی ہے",
    },
  ];

  const categories = [
    { id: "all", name: "سب دعائیں", icon: "📖" },
    { id: "morning", name: "صبح", icon: "🌅" },
    { id: "eating", name: "کھانا", icon: "🍽️" },
    { id: "sleep", name: "سونے", icon: "😴" },
    { id: "travel", name: "سفر", icon: "🚗" },
    { id: "study", name: "پڑھائی", icon: "📚" },
    { id: "difficulty", name: "مشکل", icon: "⚠️" },
    { id: "health", name: "صحت", icon: "🏥" },
  ];

  const filteredDuas = duas.filter((dua) => {
    const matchesSearch =
      dua.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dua.arabic.includes(searchTerm) ||
      dua.translation.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || dua.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("دعا کاپی ہو گئی!");
  };

  return (
    <div className="duas-container">
      <Link to="/" className="nav-back">
        ← ہوم پیج
      </Link>

      <header className="duas-header">
        <h1>📖 روز کی زندگی کی دعائیں</h1>
        <p className="subtitle">ہر موقع کے لیے روزمرہ اسلامی دعائیں</p>
      </header>

      <div className="search-filter-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="دعا تلاش کریں نام، عربی یا ترجمہ سے..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="categories-section">
          <h3>زمرے:</h3>
          <div className="categories-list">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-btn ${
                  selectedCategory === cat.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="category-icon">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="duas-count">
        {filteredDuas.length} دعائیں مل گئیں{" "}
        {selectedCategory !== "all" &&
          `${categories.find((c) => c.id === selectedCategory)?.name} میں`}
      </div>

      <div className="duas-grid">
        {filteredDuas.map((dua) => (
          <div key={dua.id} className="dua-card">
            <div className="dua-header">
              <div className="dua-title-section">
                <h3>{dua.title}</h3>
                <span className="dua-category">{dua.category}</span>
              </div>
              <div className="dua-actions">
                <button
                  className="copy-btn"
                  onClick={() =>
                    handleCopy(
                      dua.arabic +
                        "\n" +
                        dua.transliteration +
                        "\n" +
                        dua.translation
                    )
                  }
                  title="دعا کاپی کریں"
                >
                  📋 کاپی
                </button>
              </div>
            </div>

            <div className="arabic-dua">
              <div className="arabic-text">{dua.arabic}</div>
              <div className="transliteration">"{dua.transliteration}"</div>
            </div>

            <div className="dua-details">
              <div className="detail-row">
                <span className="detail-label">ترجمہ:</span>
                <p className="detail-value">{dua.translation}</p>
              </div>

              <div className="detail-row">
                <span className="detail-label">تلفظ:</span>
                <p className="detail-value pronunciation">
                  {dua.pronunciation}
                </p>
              </div>

              <div className="detail-row">
                <span className="detail-label">فوائد:</span>
                <p className="detail-value benefits">{dua.benefits}</p>
              </div>
            </div>

            <div className="dua-footer">
              <button
                className="save-btn"
                onClick={() =>
                  alert(`"${dua.title}" پسندیدہ میں محفوظ ہو گئی!`)
                }
              >
                ⭐ محفوظ کریں
              </button>
              <button
                className="share-btn"
                onClick={() => alert(`"${dua.title}" شیئر کی جا رہی ہے...`)}
              >
                🔗 شیئر کریں
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDuas.length === 0 && (
        <div className="no-results">
          <p>کوئی دعا نہیں ملی۔ مختلف لفظ یا زمرہ آزمائیں۔</p>
        </div>
      )}

      <footer className="duas-footer">
        <h3>📌 دعا پڑھنے کے آداب:</h3>
        <ul>
          <li>دل سے خلوص کے ساتھ دعا کریں</li>
          <li>اللہ کو یاد کرکے دعا شروع کریں</li>
          <li>پوری یقین کے ساتھ دعا کریں</li>
          <li>ہر وقت، ہر حالت میں دعا کریں</li>
          <li>دعا کرتے وقت پورا دھیان لگائیں</li>
        </ul>
      </footer>
    </div>
  );
}

export default DailyDuas;
