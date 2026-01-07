import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./QuranVerses.css";

function QuranVerses() {
  const [currentVerse, setCurrentVerse] = useState(0);
  const [showTranslation, setShowTranslation] = useState(true);
  const [showTafsir, setShowTafsir] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  const quranVerses = [
    {
      id: 1,
      surah: "الفاتحة",
      surahNumber: 1,
      verseNumber: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      transliteration: "Bismillahir Rahmanir Raheem",
      translation:
        "شروع کرتا ہوں اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے",
      tafsir:
        "ہر کام اللہ کے نام سے شروع کرنا چاہیے۔ رحمن اور رحیم اللہ کی صفاتی نام ہیں جو اس کی رحمت کی وسعت ظاہر کرتے ہیں۔",
      category: "شروع",
    },
    {
      id: 2,
      surah: "البقرہ",
      surahNumber: 2,
      verseNumber: 255,
      arabic:
        "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ",
      transliteration:
        "Allahu la ilaha illa Huwal Hayyul Qayyum, la ta'khuzuhu sinatun wa la nawm, lahu ma fis samawati wa ma fil ardh",
      translation:
        "اللہ وہ ہے جس کے سوا کوئی معبود نہیں، زندہ، قائم رکھنے والا، نہ اُس کو اونگھ آتی ہے نہ نیند، اسی کا ہے جو کچھ آسمانوں میں ہے اور جو کچھ زمین میں ہے",
      tafsir:
        "آیت الکرسی، قرآن کی عظیم ترین آیتوں میں سے ایک۔ اللہ کی حیات، قیومیت اور قدرت کی کامل بیان۔",
      category: "توحید",
    },
    {
      id: 3,
      surah: "البقرہ",
      surahNumber: 2,
      verseNumber: 286,
      arabic:
        "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ",
      transliteration:
        "La yukallifullah nafsan illa wus'aha, laha ma kasabat wa alaiha ma iktasabat",
      translation:
        "اللہ کسی جان کو اس کی طاقت سے زیادہ تکلیف نہیں دیتا، اس نے جو اچھا کیا اس کے لیے ہے اور جس برائی کا ارتکاب کیا اس پر ہے",
      tafsir:
        "اللہ کی رحمت کا اظہار کہ وہ کسی پر اس کی استطاعت سے زیادہ بوجھ نہیں ڈالتا۔",
      category: "رحمت",
    },
    {
      id: 4,
      surah: "آل عمران",
      surahNumber: 3,
      verseNumber: 139,
      arabic:
        "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنْتُمُ الْأَعْلَوْنَ إِنْ كُنْتُمْ مُؤْمِنِينَ",
      transliteration:
        "Wa la tahinu wa la tahzanu wa antumul a'lawna in kuntum mu'mineen",
      translation:
        "اور تم نہ ہمت ہارو اور نہ غمگین ہو اور تم ہی غالب رہو گے اگر تم ایمان دار ہو",
      tafsir: "مسلمانوں کو ہمت اور صبر کی تلقین، ایمان کی قوت سے فتح یقینی ہے۔",
      category: "ہمت",
    },
    {
      id: 5,
      surah: "الانعام",
      surahNumber: 6,
      verseNumber: 162,
      arabic:
        "قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ",
      transliteration:
        "Qul inna salati wa nusuki wa mahyaya wa mamati lillahi Rabbil 'alameen",
      translation:
        "کہہ دو کہ میری نماز اور میری قربانی اور میرا جینا اور میرا مرنا سب اللہ ہی کے لیے ہے جو سارے جہان کا پالنے والا ہے",
      tafsir: "پوری زندگی اللہ کے لیے وقف کرنے کا اعلان، عبادت کا مکمل تصور۔",
      category: "عبادت",
    },
    {
      id: 6,
      surah: "الرعد",
      surahNumber: 13,
      verseNumber: 28,
      arabic:
        "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُمْ بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
      transliteration:
        "Allazeena amanu wa tatma'inu qulubuhum bizikrillah, ala bizikrillahi tatma'in nul qulub",
      translation:
        "وہ لوگ جو ایمان لائے اور ان کے دل اللہ کے ذکر سے مطمئن ہوتے ہیں، جان لو کہ اللہ ہی کے ذکر سے دلوں کو اطمینان حاصل ہوتا ہے",
      tafsir: "اللہ کا ذکر دلوں کے لیے سکون و اطمینان کا ذریعہ ہے۔",
      category: "ذکر",
    },
    {
      id: 7,
      surah: "الطلاق",
      surahNumber: 65,
      verseNumber: 2,
      arabic: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا",
      transliteration: "Wa man yattaqillaha yaj'al lahu makhraja",
      translation:
        "اور جو اللہ سے ڈرتا ہے، اللہ اس کے لیے نکلنے کی راہ پیدا کر دیتا ہے",
      tafsir:
        "تقویٰ مشکلات سے نکلنے کا راستہ بناتا ہے، اللہ پر توکل کرنے والے کے لیے آسانیاں پیدا ہوتی ہیں۔",
      category: "تقویٰ",
    },
    {
      id: 8,
      surah: "الزمر",
      surahNumber: 39,
      verseNumber: 53,
      arabic:
        "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنْفُسِهِمْ لَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ",
      transliteration:
        "Qul ya 'ibadiyal lazeena asrafu 'ala anfusihim la taqnatu min rahmatillah",
      translation:
        "کہہ دو اے میرے بندو جنہوں نے اپنی جانوں پر زیادتی کی ہے، اللہ کی رحمت سے ناامید نہ ہو",
      tafsir:
        "اللہ کی رحمت بہت وسیع ہے، گناہگار بھی توبہ کر کے بخشش پا سکتے ہیں۔",
      category: "رحمت",
    },
    {
      id: 9,
      surah: "الحشر",
      surahNumber: 59,
      verseNumber: 18,
      arabic:
        "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنْظُرْ نَفْسٌ مَا قَدَّمَتْ لِغَدٍ",
      transliteration:
        "Ya ayyuhal lazeena amanut taqullah wa l tandhur nafsun ma qaddamat li ghad",
      translation:
        "اے ایمان والو! اللہ سے ڈرو اور ہر شخص دیکھے کہ اس نے کل (آخرت) کے لیے کیا بھیجا ہے",
      tafsir:
        "آخرت کی فکر اور اعمال کی محاسبہ، ایمان کی تکمیل کے لیے ضروری ہے۔",
      category: "آخرت",
    },
    {
      id: 10,
      surah: "العلق",
      surahNumber: 96,
      verseNumber: 1,
      arabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
      transliteration: "Iqra bismi rabbikal lazee khalaq",
      translation: "پڑھ اپنے رب کے نام سے جس نے پیدا کیا",
      tafsir:
        "پہلی وحی، علم اور تعلیم کی اہمیت پر زور، اللہ کے نام سے شروع کرنے کی تلقین۔",
      category: "علم",
    },
  ];

  const verses = quranVerses; // Direct assignment

  useEffect(() => {
    let interval;
    if (autoPlay && verses.length > 0) {
      interval = setInterval(() => {
        setCurrentVerse((prev) => (prev + 1) % verses.length);
      }, 10000); // Change verse every 10 seconds
    }
    return () => clearInterval(interval);
  }, [autoPlay, verses.length]);

  const nextVerse = () => {
    setCurrentVerse((prev) => (prev + 1) % verses.length);
  };

  const prevVerse = () => {
    setCurrentVerse((prev) => (prev - 1 + verses.length) % verses.length);
  };

  const goToVerse = (index) => {
    setCurrentVerse(index);
  };

  const handleCopyVerse = () => {
    const verse = verses[currentVerse];
    const text = `${verse.arabic}\n\n${verse.translation}\n\n${verse.tafsir}`;
    navigator.clipboard.writeText(text);
    alert("آیت کاپی ہو گئی!");
  };

  const currentVerseData = verses[currentVerse];

  return (
    <div className="quran-container">
      <Link to="/" className="nav-back">
        ← ہوم پیج
      </Link>

      <header className="quran-header">
        <h1>📖 روزانہ قرآنی آیات</h1>
        <p className="subtitle">روزانہ کی ہدایت اور روحانی غذا</p>
      </header>

      <div className="controls-panel">
        <div className="controls-card">
          <div className="auto-play-control">
            <button
              className={`auto-play-btn ${autoPlay ? "active" : ""}`}
              onClick={() => setAutoPlay(!autoPlay)}
            >
              {autoPlay ? "⏸️ خودکار چلنا بند کریں" : "▶️ خودکار چلائیں"}
            </button>
            <span className="auto-play-info">
              {autoPlay ? "(ہر 10 سیکنڈ بعد تبدیل ہوگی)" : ""}
            </span>
          </div>

          <div className="display-controls">
            <button
              className={`display-btn ${showTranslation ? "active" : ""}`}
              onClick={() => setShowTranslation(!showTranslation)}
            >
              {showTranslation ? "🔤 ترجمہ چھپائیں" : "🔤 ترجمہ دکھائیں"}
            </button>

            <button
              className={`display-btn ${showTafsir ? "active" : ""}`}
              onClick={() => setShowTafsir(!showTafsir)}
            >
              {showTafsir ? "💡 تفسیر چھپائیں" : "💡 تفسیر دکھائیں"}
            </button>
          </div>
        </div>
      </div>

      <div className="verse-navigation">
        <div className="verse-counter">
          آیت {currentVerse + 1} از {verses.length}
        </div>

        <div className="nav-buttons">
          <button onClick={prevVerse} className="nav-btn prev-btn">
            ← پچھلی آیت
          </button>

          <button onClick={nextVerse} className="nav-btn next-btn">
            اگلی آیت →
          </button>
        </div>
      </div>

      <div className="verse-display">
        <div className="verse-card">
          <div className="verse-header">
            <div className="surah-info">
              <h2>{currentVerseData.surah}</h2>
              <div className="verse-meta">
                <span className="surah-number">
                  سورہ #{currentVerseData.surahNumber}
                </span>
                <span className="verse-number">
                  آیت #{currentVerseData.verseNumber}
                </span>
                <span className="verse-category">
                  {currentVerseData.category}
                </span>
              </div>
            </div>

            <div className="verse-actions">
              <button
                className="copy-btn"
                onClick={handleCopyVerse}
                title="آیت کاپی کریں"
              >
                📋 کاپی
              </button>

              <button
                className="bookmark-btn"
                onClick={() => alert("آیت نشان زد ہو گئی!")}
                title="نشان زد کریں"
              >
                ⭐ نشان زد
              </button>
            </div>
          </div>

          <div className="arabic-verse">
            <div className="arabic-text">{currentVerseData.arabic}</div>
            <div className="transliteration">
              "{currentVerseData.transliteration}"
            </div>
          </div>

          {showTranslation && (
            <div className="translation-section">
              <h3>ترجمہ:</h3>
              <p className="translation-text">{currentVerseData.translation}</p>
            </div>
          )}

          {showTafsir && (
            <div className="tafsir-section">
              <h3>تفسیر:</h3>
              <p className="tafsir-text">{currentVerseData.tafsir}</p>
            </div>
          )}

          <div className="verse-footer">
            <div className="category-badge">
              زمرہ: {currentVerseData.category}
            </div>
            <div className="share-options">
              <button className="share-btn">🔗 شیئر کریں</button>
              <button className="audio-btn">🔊 سنیں</button>
            </div>
          </div>
        </div>
      </div>

      <div className="verses-list">
        <h3>تمام آیات:</h3>
        <div className="verses-grid">
          {verses.map((verse, index) => (
            <button
              key={verse.id}
              className={`verse-item ${index === currentVerse ? "active" : ""}`}
              onClick={() => goToVerse(index)}
            >
              <div className="verse-item-arabic">
                {verse.arabic.substring(0, 30)}...
              </div>
              <div className="verse-item-info">
                <span className="item-surah">{verse.surah}</span>
                <span className="item-verse">آیت {verse.verseNumber}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <footer className="quran-info">
        <div className="info-section">
          <h3>📚 قرآن پاک کی فضیلت:</h3>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h4>شفا</h4>
              <p>قرآن دل و دماغ کے لیے شفا ہے</p>
            </div>
            <div className="benefit-card">
              <h4>رہنمائی</h4>
              <p>زندگی کے ہر معاملے میں رہنمائی</p>
            </div>
            <div className="benefit-card">
              <h4>ثواب</h4>
              <p>ہر حرف پڑھنے پر دس نیکیاں</p>
            </div>
            <div className="benefit-card">
              <h4>سکون</h4>
              <p>دل کو سکون اور اطمینان ملتا ہے</p>
            </div>
          </div>
        </div>

        <div className="daily-tip">
          <h3>💡 روزانہ ٹپ:</h3>
          <p>روزانہ کم از کم ایک آیت قرآن ضرور پڑھیں اور اس پر غور کریں۔</p>
        </div>
      </footer>
    </div>
  );
}

export default QuranVerses;
