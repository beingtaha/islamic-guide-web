import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import "./DailyDuas.css";

function DailyDuas() {
  const { isDarkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Force re-render on theme/language change
  useEffect(() => {
    // This forces re-render
  }, [isDarkMode, language]);

  const duas = [
    {
      id: 1,
      category: "morning",
      titleUrdu: "صبح کی دعا",
      titleEng: "Morning Dua",
      arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ",
      transliteration: "Asbahna wa asbahal mulku lillah, walhamdu lillah",
      translationUrdu:
        "ہم صبح کو پہنچے اور پوری بادشاہت اللہ کے لیے ہے، اور سب تعریف اللہ کے لیے ہے",
      translationEng:
        "We have reached the morning and the dominion belongs to Allah, and all praise is for Allah",
      pronunciation: "اسبحنا وأصبح الملك لله، والحمد لله",
      benefitsUrdu: "دن کی شروعات برکت سے ہوتی ہے، ہر برائی سے حفاظت",
      benefitsEng: "The day starts with blessings, protection from all evils",
    },
    {
      id: 2,
      category: "morning",
      titleUrdu: "گھر سے نکلتے وقت",
      titleEng: "Leaving Home",
      arabic:
        "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
      transliteration:
        "Bismillah, tawakkaltu alallah, wa la hawla wa la quwwata illa billah",
      translationUrdu:
        "اللہ کے نام سے، میں نے اللہ پر بھروسہ کیا، اور کوئی طاقت اور قوت نہیں مگر اللہ کی مدد سے",
      translationEng:
        "In the name of Allah, I put my trust in Allah, and there is no power and strength except with Allah",
      pronunciation: "بسم الله، توکلت على الله، ولا حول ولا قوة إلا بالله",
      benefitsUrdu: "سفر میں حفاظت، ہر مشکل سے بچاؤ",
      benefitsEng: "Protection during travel, safety from every difficulty",
    },
    {
      id: 3,
      category: "eating",
      titleUrdu: "کھانا کھانے سے پہلے",
      titleEng: "Before Eating",
      arabic: "بِسْمِ اللَّهِ",
      transliteration: "Bismillah",
      translationUrdu: "اللہ کے نام سے (شروع کرتا ہوں)",
      translationEng: "In the name of Allah (I begin)",
      pronunciation: "بسم الله",
      benefitsUrdu: "کھانا برکت والا ہوتا ہے، شیطان کھانے میں شریک نہیں ہوتا",
      benefitsEng: "Food becomes blessed, Satan does not share in the meal",
    },
    {
      id: 4,
      category: "eating",
      titleUrdu: "کھانا کھا کر",
      titleEng: "After Eating",
      arabic:
        "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
      transliteration:
        "Alhamdulillahil ladhi at'amana wa saqana wa ja'alana muslimin",
      translationUrdu:
        "سب تعریف اس اللہ کے لیے ہے جس نے ہمیں کھلایا، پلایا اور ہمیں مسلمان بنایا",
      translationEng:
        "All praise is for Allah who fed us, gave us drink, and made us Muslims",
      pronunciation: "الحمد لله الذي أطعمنا وسقانا وجعلنا مسلمين",
      benefitsUrdu: "شکر ادا ہوتا ہے، رزق میں اضافہ ہوتا ہے",
      benefitsEng: "Gratitude is expressed, sustenance increases",
    },
    {
      id: 5,
      category: "sleep",
      titleUrdu: "سونے سے پہلے",
      titleEng: "Before Sleeping",
      arabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ",
      transliteration: "Bismika rabbi wada'tu janbi, wa bika arfa'uhu",
      translationUrdu:
        "اے میرے رب! تیرے نام سے میں نے اپنا پہلو (سونے کے لیے) گرایا اور تیرے ہی نام سے میں اسے اٹھاؤں گا",
      translationEng:
        "O my Lord! In Your name I lay my side, and in Your name I raise it",
      pronunciation: "باسمك ربي وضعت جنبي، وبك أرفعه",
      benefitsUrdu: "نیند میں حفاظت، بری خوابوں سے بچاؤ",
      benefitsEng: "Protection during sleep, safety from bad dreams",
    },
    {
      id: 6,
      category: "sleep",
      titleUrdu: "صبح بستر سے اٹھ کر",
      titleEng: "Waking Up",
      arabic:
        "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
      transliteration:
        "Alhamdulillahil ladhi ahyana ba'da ma amatana wa ilaihin nushur",
      translationUrdu:
        "سب تعریف اللہ ہی کے لیے ہے جس نے ہمیں موت کے بعد زندہ کیا اور اسی کی طرف اٹھنا ہے",
      translationEng:
        "All praise is for Allah who gave us life after death and to Him is the resurrection",
      pronunciation: "الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور",
      benefitsUrdu: "دن کی شروعات شکر سے، نیند کا احسان ادا",
      benefitsEng:
        "The day begins with gratitude, acknowledging the blessing of sleep",
    },
    {
      id: 7,
      category: "travel",
      titleUrdu: "سفر شروع کرتے وقت",
      titleEng: "Starting Journey",
      arabic:
        "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ",
      transliteration:
        "Subhanalladhi sakhkhara lana hadha wa ma kunna lahu muqrinin",
      translationUrdu:
        "پاک ہے وہ (اللہ) جس نے اس (سواری) کو ہمارے قابو میں کر دیا اور ہم اس کے قابل نہ تھے",
      translationEng:
        "Glory be to the One who has subjected this to us, and we could not have done it alone",
      pronunciation: "سبحان الذي سخر لنا هذا وما كنا له مقرنين",
      benefitsUrdu: "سفر میں امن، سفر آسان ہوتا ہے",
      benefitsEng: "Peace during travel, journey becomes easy",
    },
    {
      id: 8,
      category: "study",
      titleUrdu: "پڑھنے کی دعا",
      titleEng: "For Knowledge",
      arabic: "رَبِّ زِدْنِي عِلْمًا",
      transliteration: "Rabbi zidni ilma",
      translationUrdu: "اے میرے رب! میرے علم میں اضافہ فرما",
      translationEng: "O my Lord! Increase me in knowledge",
      pronunciation: "رب زدني علما",
      benefitsUrdu: "علم میں برکت، سمجھ میں آسانی",
      benefitsEng: "Blessings in knowledge, ease in understanding",
    },
    {
      id: 9,
      category: "difficulty",
      titleUrdu: "مشکل وقت کی دعا",
      titleEng: "During Difficulty",
      arabic:
        "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
      transliteration: "La ilaha illa anta subhanaka inni kuntu minaz zalimin",
      translationUrdu:
        "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بیشک میں ظالموں میں سے تھا",
      translationEng:
        "There is no god but You, glory be to You, indeed I have been among the wrongdoers",
      pronunciation: "لا إله إلا أنت سبحانك إني كنت من الظالمين",
      benefitsUrdu: "مشکل آسان ہوتی ہے، غم دور ہوتا ہے",
      benefitsEng: "Difficulty becomes easy, sorrow is removed",
    },
    {
      id: 10,
      category: "health",
      titleUrdu: "بیماری کی دعا",
      titleEng: "During Illness",
      arabic:
        "أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ",
      transliteration: "As'alullahal azim rabbal arshil azim an yashfiyak",
      translationUrdu:
        "میں اللہ عظیم سے، عرش عظیم کے رب سے، تمہیں شفا دینے کے لیے دعا کرتا ہوں",
      translationEng:
        "I ask Allah, the Great, the Lord of the Great Throne, to heal you",
      pronunciation: "أسأل الله العظيم رب العرش العظيم أن يشفيك",
      benefitsUrdu: "شفا ملتی ہے، تکلیف کم ہوتی ہے",
      benefitsEng: "Healing is granted, pain is reduced",
    },
  ];

  const categories = [
    { id: "all", nameUrdu: "سب دعائیں", nameEng: "All Duas", icon: "📖" },
    { id: "morning", nameUrdu: "صبح", nameEng: "Morning", icon: "🌅" },
    { id: "eating", nameUrdu: "کھانا", nameEng: "Eating", icon: "🍽️" },
    { id: "sleep", nameUrdu: "سونے", nameEng: "Sleep", icon: "😴" },
    { id: "travel", nameUrdu: "سفر", nameEng: "Travel", icon: "🚗" },
    { id: "study", nameUrdu: "پڑھائی", nameEng: "Study", icon: "📚" },
    { id: "difficulty", nameUrdu: "مشکل", nameEng: "Difficulty", icon: "⚠️" },
    { id: "health", nameUrdu: "صحت", nameEng: "Health", icon: "🏥" },
  ];

  const filteredDuas = duas.filter((dua) => {
    const matchesSearch =
      (language === "urdu" ? dua.titleUrdu : dua.titleEng)
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      dua.arabic.includes(searchTerm) ||
      (language === "urdu" ? dua.translationUrdu : dua.translationEng)
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || dua.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(
      language === "urdu" ? "دعا کاپی ہو گئی!" : "Dua copied to clipboard!",
    );
  };

  return (
    <div className={`duas-container ${isDarkMode ? "dark" : "light"}`}>
      <Link to="/" className="nav-back">
        {language === "urdu" ? "← ہوم پیج" : "← Home"}
      </Link>

      <header className="duas-header">
        <h1>
          {language === "urdu"
            ? "📖 روز کی زندگی کی دعائیں"
            : "📖 Daily Life Duas"}
        </h1>
        <p className="subtitle">
          {language === "urdu"
            ? "ہر موقع کے لیے ضروری دعائیں"
            : "Essential Supplications for Every Occasion"}
        </p>
      </header>

      <div className="search-filter-section">
        <div className="search-box">
          <input
            type="text"
            placeholder={
              language === "urdu" ? "دعا تلاش کریں..." : "Search duas..."
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="categories-section">
          <h3>{language === "urdu" ? "اقسام:" : "Categories:"}</h3>
          <div className="categories-list">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="category-icon">{cat.icon}</span>
                {language === "urdu" ? cat.nameUrdu : cat.nameEng}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="duas-count">
        {filteredDuas.length}{" "}
        {language === "urdu" ? "دعائیں ملیں" : "duas found"}
        {selectedCategory !== "all" &&
          ` ${language === "urdu" ? "میں" : "in"} ${
            language === "urdu"
              ? categories.find((c) => c.id === selectedCategory)?.nameUrdu
              : categories.find((c) => c.id === selectedCategory)?.nameEng
          }`}
      </div>

      <div className="duas-grid">
        {filteredDuas.map((dua) => (
          <div key={dua.id} className="dua-card">
            <div className="dua-header">
              <div className="dua-title-section">
                <h3>{language === "urdu" ? dua.titleUrdu : dua.titleEng}</h3>
                <span className="dua-category">
                  {language === "urdu"
                    ? categories.find((c) => c.id === dua.category)?.nameUrdu
                    : categories.find((c) => c.id === dua.category)?.nameEng}
                </span>
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
                        (language === "urdu"
                          ? dua.translationUrdu
                          : dua.translationEng),
                    )
                  }
                  title={language === "urdu" ? "دعا کاپی کریں" : "Copy Dua"}
                >
                  📋 {language === "urdu" ? "کاپی" : "Copy"}
                </button>
              </div>
            </div>

            <div className="arabic-dua">
              <div className="arabic-text">{dua.arabic}</div>
              <div className="transliteration">"{dua.transliteration}"</div>
            </div>

            <div className="dua-details">
              <div className="detail-row">
                <span className="detail-label">
                  {language === "urdu" ? "ترجمہ:" : "Translation:"}
                </span>
                <p className="detail-value">
                  {language === "urdu"
                    ? dua.translationUrdu
                    : dua.translationEng}
                </p>
              </div>

              <div className="detail-row">
                <span className="detail-label">
                  {language === "urdu" ? "تلفظ:" : "Pronunciation:"}
                </span>
                <p className="detail-value pronunciation">
                  {dua.pronunciation}
                </p>
              </div>

              <div className="detail-row">
                <span className="detail-label">
                  {language === "urdu" ? "فوائد:" : "Benefits:"}
                </span>
                <p className="detail-value benefits">
                  {language === "urdu" ? dua.benefitsUrdu : dua.benefitsEng}
                </p>
              </div>
            </div>

            <div className="dua-footer">
              <button
                className="save-btn"
                onClick={() =>
                  alert(
                    language === "urdu" ? "دعا محفوظ ہو گئی!" : "Dua saved!",
                  )
                }
              >
                ⭐ {language === "urdu" ? "محفوظ کریں" : "Save"}
              </button>
              <button
                className="share-btn"
                onClick={() =>
                  alert(
                    language === "urdu"
                      ? "دعا شیئر کی جا رہی ہے..."
                      : "Sharing dua...",
                  )
                }
              >
                🔗 {language === "urdu" ? "شیئر کریں" : "Share"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDuas.length === 0 && (
        <div className="no-results">
          <p>
            {language === "urdu"
              ? "کوئی دعا نہیں ملی۔ مختلف لفظ یا زمرہ آزمائیں۔"
              : "No duas found. Try a different keyword or category."}
          </p>
        </div>
      )}

      <footer className="duas-footer">
        <h3>
          {language === "urdu"
            ? "📌 دعا پڑھنے کے آداب:"
            : "📌 Etiquettes of Dua:"}
        </h3>
        <ul>
          <li>
            {language === "urdu"
              ? "دل سے خلوص کے ساتھ دعا کریں"
              : "Make dua with sincerity from the heart"}
          </li>
          <li>
            {language === "urdu"
              ? "اللہ کی تعریف اور درود شریف سے شروع کریں"
              : "Begin with praise of Allah and salawat upon the Prophet"}
          </li>
          <li>
            {language === "urdu"
              ? "پوری یقین کے ساتھ دعا کریں"
              : "Make dua with full conviction"}
          </li>
          <li>
            {language === "urdu"
              ? "ہر وقت، ہر حالت میں دعا کریں"
              : "Make dua at all times, in all situations"}
          </li>
          <li>
            {language === "urdu"
              ? "دعا کرتے وقت پورا دھیان لگائیں"
              : "Be fully focused and present when making dua"}
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default DailyDuas;
