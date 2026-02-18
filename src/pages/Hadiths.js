import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import "./Hadiths.css";

function Hadiths() {
  const { isDarkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [selectedBook, setSelectedBook] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Force re-render on theme/language change
  useEffect(() => {}, [isDarkMode, language]);

  const hadiths = [
    {
      id: 1,
      book: "bukhari",
      bookNameUrdu: "صحیح بخاری",
      bookNameEng: "Sahih Bukhari",
      number: "1",
      arabic:
        "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
      transliteration:
        "Innamal a'malu binniyyat, wa innama likullimri'in ma nawa",
      translationUrdu:
        "بیشک اعمال کا دارومدار نیتوں پر ہے، اور ہر شخص کے لیے وہی ہے جس کی اس نے نیت کی",
      translationEng:
        "Deeds are judged by intentions, and every person will get what they intended",
      explanationUrdu:
        "یہ حدیث اسلامی تعلیمات کی بنیاد ہے۔ ہر عمل کی قدر نیت سے ہے۔ اچھی نیت سے چھوٹا عمل بھی بڑا بن جاتا ہے اور بری نیت سے بڑا عمل بھی ضائع ہو جاتا ہے۔",
      explanationEng:
        "This hadith is the foundation of Islamic teachings. Every action is judged by its intention. A small deed with good intention becomes great, and a great deed with bad intention is wasted.",
      categoryUrdu: "نیت",
      categoryEng: "Intention",
    },
    {
      id: 2,
      book: "muslim",
      bookNameUrdu: "صحیح مسلم",
      bookNameEng: "Sahih Muslim",
      number: "1599",
      arabic:
        "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
      transliteration:
        "Man kana yu'minu billahi wal yawmil akhiri falyaqul khairan aw liyasmut",
      translationUrdu:
        "جو شخص اللہ اور آخرت کے دن پر ایمان رکھتا ہے، اسے چاہیے کہ اچھی بات کہے یا خاموش رہے",
      translationEng:
        "Whoever believes in Allah and the Last Day should speak good or remain silent",
      explanationUrdu:
        "اسلام میں گفتگو کے آداب سکھاتا ہے۔ بے فائدہ باتوں سے پرہیز اور اچھی بات ہی کرنے کا حکم ہے۔ خاموشی بھی عبادت ہے جب کوئی اچھی بات نہ ہو۔",
      explanationEng:
        "Teaches the etiquette of speech in Islam. Avoid useless talk and only speak good. Silence is also worship when there is no good to say.",
      categoryUrdu: "اخلاق",
      categoryEng: "Manners",
    },
    {
      id: 3,
      book: "bukhari",
      bookNameUrdu: "صحیح بخاری",
      bookNameEng: "Sahih Bukhari",
      number: "13",
      arabic:
        "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
      transliteration:
        "La yu'minu ahadukum hatta yuhibba li-akhihi ma yuhibbu linafsih",
      translationUrdu:
        "تم میں سے کوئی شخص اس وقت تک مومن نہیں ہو سکتا جب تک کہ اپنے بھائی کے لیے وہ پسند نہ کرے جو اپنے لیے پسند کرتا ہے",
      translationEng:
        "None of you truly believes until he loves for his brother what he loves for himself",
      explanationUrdu:
        "مسلمانوں میں بھائی چارے اور ہمدردی کی تعلیم۔ دوسروں کے لیے وہی چاہنا جو اپنے لیے چاہتے ہیں، یہ ایمان کی تکمیل ہے۔",
      explanationEng:
        "Teaches brotherhood and empathy among Muslims. Wanting for others what you want for yourself completes your faith.",
      categoryUrdu: "اخوت",
      categoryEng: "Brotherhood",
    },
    {
      id: 4,
      book: "tirmidhi",
      bookNameUrdu: "سنن ترمذی",
      bookNameEng: "Sunan Tirmidhi",
      number: "2516",
      arabic:
        "اتَّقِ اللَّهِ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
      transliteration:
        "Ittaqillaha haithuma kunta, wa atbi'is sai'yata alhasanata tamhaha, wa khaliqin nasa bi khuluqin hasan",
      translationUrdu:
        "جہاں کہیں بھی ہو اللہ سے ڈرتے رہو، برائی کے بعد نیکی کر لو وہ اسے مٹا دیتی ہے، اور لوگوں کے ساتھ اچھے اخلاق سے پیش آؤ",
      translationEng:
        "Fear Allah wherever you are, follow a bad deed with a good deed and it will erase it, and behave with good character towards people",
      explanationUrdu:
        "ہر جگہ تقویٰ، گناہوں کے بعد نیکی سے تلافی، اور لوگوں کے ساتھ اچھے اخلاق کی تلقین۔ یہ تینوں باتیں کامیاب زندگی کے اصول ہیں۔",
      explanationEng:
        "Three principles of successful life: Taqwa everywhere, good deeds after sins, and good character with people.",
      categoryUrdu: "اخلاق",
      categoryEng: "Manners",
    },
    {
      id: 5,
      book: "bukhari",
      bookNameUrdu: "صحیح بخاری",
      bookNameEng: "Sahih Bukhari",
      number: "52",
      arabic: "مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ",
      transliteration: "Min husni islamil mar'i tarkuhu ma la ya'nih",
      translationUrdu:
        "آدمی کے اچھے مسلمان ہونے میں یہ ہے کہ وہ غیر ضروری باتوں کو چھوڑ دے",
      translationEng:
        "Part of a person's good Islam is to leave what does not concern them",
      explanationUrdu:
        "اچھے مسلمان کی پہچان یہ ہے کہ وہ فضول باتوں اور کاموں سے دور رہے۔ جو چیز اس کے لیے مفید نہ ہو، اس میں وقت ضائع نہ کرے۔",
      explanationEng:
        "A good Muslim stays away from useless talk and deeds. Do not waste time on things that do not benefit you.",
      categoryUrdu: "زندگی",
      categoryEng: "Life",
    },
    {
      id: 6,
      book: "muslim",
      bookNameUrdu: "صحیح مسلم",
      bookNameEng: "Sahih Muslim",
      number: "2674",
      arabic:
        "الرَّاحِمُونَ يَرْحَمُهُمْ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الْأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
      transliteration:
        "Ar-raahimuna yarhamuhumur Rahman, irhamu man fil ardi yarhamkum man fis sama'i",
      translationUrdu:
        "رحم کرنے والوں پر رحمان رحم کرتا ہے، تم زمین والوں پر رحم کرو، آسمان والا تم پر رحم کرے گا",
      translationEng:
        "The merciful will be shown mercy by the Most Merciful. Show mercy to those on earth, and the One in heaven will show mercy to you",
      explanationUrdu:
        "رحم و کرم کی اہمیت۔ جو دوسروں پر رحم کرتا ہے، اللہ اس پر رحم کرتا ہے۔ یہ انسانوں اور جانوروں سب کے ساتھ رحم کا حکم ہے۔",
      explanationEng:
        "Importance of mercy. Whoever shows mercy to others, Allah shows mercy to them. This includes mercy to humans and animals.",
      categoryUrdu: "رحم",
      categoryEng: "Mercy",
    },
    {
      id: 7,
      book: "abudawud",
      bookNameUrdu: "سنن ابو داؤد",
      bookNameEng: "Sunan Abu Dawud",
      number: "4940",
      arabic: "تَسَبَّحُوا وَهِيَ مَكْسُورَةٌ، وَكَبِّرُوا وَهِيَ مَخْسُورَةٌ",
      transliteration:
        "Tasabbahu wa hiya maksuratun, wa kabbiru wa hiya makhsuratun",
      translationUrdu:
        "رات کو ستارے ٹوٹتے ہوئے تسبیح کرو، اور صبح کو ستارے ڈوبتے ہوئے تکبیر کرو",
      translationEng:
        "Glorify Allah when the stars are setting, and magnify Him when they are rising",
      explanationUrdu:
        "اللہ کی یاد کے اوقات۔ صبح اور شام کی تسبیح و تکبیر کی فضیلت۔ یہ معمول زندگی کو برکت سے بھر دیتا ہے۔",
      explanationEng:
        "Times of remembering Allah. The virtue of glorifying Allah in the morning and evening. This practice fills life with blessings.",
      categoryUrdu: "اذکار",
      categoryEng: "Remembrance",
    },
    {
      id: 8,
      book: "ibnmajah",
      bookNameUrdu: "سنن ابن ماجہ",
      bookNameEng: "Sunan Ibn Majah",
      number: "224",
      arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
      transliteration: "Talabul ilmi faridatun ala kulli muslim",
      translationUrdu: "علم حاصل کرنا ہر مسلمان پر فرض ہے",
      translationEng: "Seeking knowledge is an obligation upon every Muslim",
      explanationUrdu:
        "علم کی اہمیت۔ مرد و عورت، بوڑھے اور جوان، سب پر علم حاصل کرنا فرض ہے۔ دینی و دنیاوی دونوں علوم شامل ہیں۔",
      explanationEng:
        "Importance of knowledge. It is obligatory for every Muslim, male and female, young and old, to seek knowledge. Includes both religious and worldly knowledge.",
      categoryUrdu: "علم",
      categoryEng: "Knowledge",
    },
    {
      id: 9,
      book: "nasai",
      bookNameUrdu: "سنن نسائی",
      bookNameEng: "Sunan Nasai",
      number: "5004",
      arabic:
        "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ",
      transliteration:
        "Man salaka tariqan yaltamisu fihi ilman sahhallahu lahu tariqan ilal jannah",
      translationUrdu:
        "جو شخص علم حاصل کرنے کے لیے کسی راستے پر چلتا ہے، اللہ اس کے لیے جنت کا راستہ آسان کر دیتا ہے",
      translationEng:
        "Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise",
      explanationUrdu:
        "علم کی راہ میں چلنے والوں کے لیے جنت کی آسانی۔ علم کی تلاش میں نکلنا ہی عبادت ہے اور اس کا بہت بڑا اجر ہے۔",
      explanationEng:
        "Ease of Paradise for those who seek knowledge. The journey of seeking knowledge itself is worship with great reward.",
      categoryUrdu: "علم",
      categoryEng: "Knowledge",
    },
    {
      id: 10,
      book: "bukhari",
      bookNameUrdu: "صحیح بخاری",
      bookNameEng: "Sahih Bukhari",
      number: "6011",
      arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
      transliteration:
        "Al-muslimu man salimal muslimuna min lisanihee wa yadih",
      translationUrdu:
        "مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں",
      translationEng:
        "A Muslim is one from whose tongue and hand other Muslims are safe",
      explanationUrdu:
        "مسلمان کی تعریف۔ حقیقی مسلمان وہ ہے جو دوسروں کو اپنی زبان (باتوں) اور ہاتھ (کاموں) سے تکلیف نہ پہنچائے۔",
      explanationEng:
        "Definition of a Muslim. A true Muslim does not harm others with their tongue (speech) or hand (actions).",
      categoryUrdu: "اخلاق",
      categoryEng: "Manners",
    },
  ];

  const books = [
    {
      id: "all",
      nameUrdu: "سب حدیثیں",
      nameEng: "All Hadiths",
      color: "#27ae60",
    },
    {
      id: "bukhari",
      nameUrdu: "صحیح بخاری",
      nameEng: "Sahih Bukhari",
      color: "#3498db",
    },
    {
      id: "muslim",
      nameUrdu: "صحیح مسلم",
      nameEng: "Sahih Muslim",
      color: "#9b59b6",
    },
    {
      id: "tirmidhi",
      nameUrdu: "سنن ترمذی",
      nameEng: "Sunan Tirmidhi",
      color: "#e74c3c",
    },
    {
      id: "abudawud",
      nameUrdu: "سنن ابو داؤد",
      nameEng: "Sunan Abu Dawud",
      color: "#f39c12",
    },
    {
      id: "nasai",
      nameUrdu: "سنن نسائی",
      nameEng: "Sunan Nasai",
      color: "#1abc9c",
    },
    {
      id: "ibnmajah",
      nameUrdu: "سنن ابن ماجہ",
      nameEng: "Sunan Ibn Majah",
      color: "#34495e",
    },
  ];

  const filteredHadiths = hadiths.filter((hadith) => {
    const matchesBook = selectedBook === "all" || hadith.book === selectedBook;
    const matchesSearch =
      hadith.arabic.includes(searchTerm) ||
      (language === "urdu" ? hadith.translationUrdu : hadith.translationEng)
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (language === "urdu" ? hadith.categoryUrdu : hadith.categoryEng)
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesBook && matchesSearch;
  });

  const handleCopyHadith = (hadith) => {
    const text = `${hadith.arabic}\n\n${hadith.transliteration}\n\n${language === "urdu" ? hadith.translationUrdu : hadith.translationEng}\n\n${language === "urdu" ? hadith.explanationUrdu : hadith.explanationEng}`;
    navigator.clipboard.writeText(text);
    alert(language === "urdu" ? "حدیث کاپی ہو گئی!" : "Hadith copied!");
  };

  return (
    <div className={`hadiths-container ${isDarkMode ? "dark" : "light"}`}>
      <Link to="/" className="nav-back">
        {language === "urdu" ? "← ہوم پیج" : "← Home"}
      </Link>

      <header className="hadiths-header">
        <h1>
          {language === "urdu" ? "🕌 ضروری حدیثیں" : "🕌 Essential Hadiths"}
        </h1>
        <p className="subtitle">
          {language === "urdu"
            ? "رسول اللہ ﷺ کے قیمتی ارشادات"
            : "Precious Sayings of Prophet Muhammad ﷺ"}
        </p>
      </header>

      <div className="controls-section">
        <div className="search-container">
          <input
            type="text"
            placeholder={
              language === "urdu" ? "حدیث تلاش کریں..." : "Search hadiths..."
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="books-filter">
          <h3>{language === "urdu" ? "حدیث کی کتابیں:" : "Hadith Books:"}</h3>
          <div className="books-list">
            {books.map((book) => (
              <button
                key={book.id}
                className={`book-btn ${selectedBook === book.id ? "active" : ""}`}
                onClick={() => setSelectedBook(book.id)}
                style={{ "--book-color": book.color }}
              >
                {language === "urdu" ? book.nameUrdu : book.nameEng}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="hadiths-count">
        {filteredHadiths.length}{" "}
        {language === "urdu" ? "حدیثیں ملیں" : "hadiths found"}
        {selectedBook !== "all" &&
          ` ${language === "urdu" ? "سے" : "from"} ${
            language === "urdu"
              ? books.find((b) => b.id === selectedBook)?.nameUrdu
              : books.find((b) => b.id === selectedBook)?.nameEng
          }`}
      </div>

      <div className="hadiths-grid">
        {filteredHadiths.map((hadith) => (
          <div key={hadith.id} className="hadith-card">
            <div className="hadith-header">
              <div className="hadith-meta">
                <span
                  className="book-badge"
                  style={{
                    backgroundColor: books.find((b) => b.id === hadith.book)
                      ?.color,
                  }}
                >
                  {language === "urdu"
                    ? hadith.bookNameUrdu
                    : hadith.bookNameEng}
                </span>
                <span className="hadith-number">
                  {language === "urdu"
                    ? `حدیث #${hadith.number}`
                    : `Hadith #${hadith.number}`}
                </span>
              </div>
              <div className="category-tag">
                {language === "urdu" ? hadith.categoryUrdu : hadith.categoryEng}
              </div>
            </div>

            <div className="arabic-hadith">
              <div className="arabic-text">{hadith.arabic}</div>
              <div className="transliteration">"{hadith.transliteration}"</div>
            </div>

            <div className="hadith-details">
              <div className="detail-section">
                <h4>{language === "urdu" ? "ترجمہ:" : "Translation:"}</h4>
                <p className="translation">
                  {language === "urdu"
                    ? hadith.translationUrdu
                    : hadith.translationEng}
                </p>
              </div>

              <div className="detail-section">
                <h4>{language === "urdu" ? "وضاحت:" : "Explanation:"}</h4>
                <p className="explanation">
                  {language === "urdu"
                    ? hadith.explanationUrdu
                    : hadith.explanationEng}
                </p>
              </div>
            </div>

            <div className="hadith-footer">
              <button
                className="copy-btn"
                onClick={() => handleCopyHadith(hadith)}
              >
                📋 {language === "urdu" ? "حدیث کاپی کریں" : "Copy Hadith"}
              </button>
              <button
                className="save-btn"
                onClick={() =>
                  alert(
                    language === "urdu"
                      ? "حدیث محفوظ ہو گئی!"
                      : "Hadith saved!",
                  )
                }
              >
                ⭐ {language === "urdu" ? "محفوظ کریں" : "Save"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredHadiths.length === 0 && (
        <div className="no-hadiths">
          <p>
            {language === "urdu"
              ? "کوئی حدیث نہیں ملی۔ مختلف لفظ یا کتاب آزمائیں۔"
              : "No hadiths found. Try a different keyword or book."}
          </p>
        </div>
      )}

      <footer className="hadiths-info">
        <h3>
          {language === "urdu" ? "📚 حدیث کے بارے میں:" : "📚 About Hadith:"}
        </h3>
        <div className="info-grid">
          <div className="info-card">
            <h4>{language === "urdu" ? "حدیث کیا ہے؟" : "What is Hadith?"}</h4>
            <p>
              {language === "urdu"
                ? "حدیث رسول اللہ ﷺ کے قول، فعل یا تقریر کو کہتے ہیں۔ یہ قرآن کریم کے بعد اسلامی تعلیمات کا دوسرا بڑا ماخذ ہے۔"
                : "Hadith refers to the sayings, actions, or approvals of Prophet Muhammad ﷺ. It is the second primary source of Islamic teachings after the Quran."}
            </p>
          </div>
          <div className="info-card">
            <h4>{language === "urdu" ? "صحاح ستہ" : "Six Authentic Books"}</h4>
            <p>
              {language === "urdu"
                ? "چھ مستند حدیث کی کتابیں: صحیح بخاری، صحیح مسلم، سنن ابو داؤد، سنن ترمذی، سنن نسائی، سنن ابن ماجہ۔"
                : "Six authentic hadith books: Sahih Bukhari, Sahih Muslim, Sunan Abu Dawud, Sunan Tirmidhi, Sunan Nasai, Sunan Ibn Majah."}
            </p>
          </div>
          <div className="info-card">
            <h4>
              {language === "urdu"
                ? "حدیث پڑھنے کے فوائد"
                : "Benefits of Reading Hadith"}
            </h4>
            <p>
              {language === "urdu"
                ? "سیرت نبوی ﷺ سے آگاہی، اسلامی تعلیمات کا فہم، عملی زندگی کے لیے رہنمائی، آخرت میں نجات۔"
                : "Knowledge of the Prophet's ﷺ life, understanding of Islamic teachings, guidance for practical life, salvation in the Hereafter."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Hadiths;
