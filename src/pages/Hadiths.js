import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hadiths.css";

function Hadiths() {
  const [selectedBook, setSelectedBook] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const hadiths = [
    {
      id: 1,
      book: "bukhari",
      bookName: "صحیح بخاری",
      number: "1",
      arabic:
        "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
      transliteration:
        "Innamal a'malu binniyyat, wa innama likullimri'in ma nawa",
      translation:
        "بیشک اعمال کا دارومدار نیتوں پر ہے، اور ہر شخص کے لیے وہی ہے جس کی اس نے نیت کی",
      explanation:
        "یہ حدیث اسلامی تعلیمات کی بنیاد ہے۔ ہر عمل کی قدر نیت سے ہے۔ اچھی نیت سے چھوٹا عمل بھی بڑا بن جاتا ہے اور بری نیت سے بڑا عمل بھی ضائع ہو جاتا ہے۔",
      category: "نیت",
    },
    {
      id: 2,
      book: "muslim",
      bookName: "صحیح مسلم",
      number: "1599",
      arabic:
        "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
      transliteration:
        "Man kana yu'minu billahi wal yawmil akhiri falyaqul khairan aw liyasmut",
      translation:
        "جو شخص اللہ اور آخرت کے دن پر ایمان رکھتا ہے، اسے چاہیے کہ اچھی بات کہے یا خاموش رہے",
      explanation:
        "اسلام میں گفتگو کے آداب سکھاتا ہے۔ بے فائدہ باتوں سے پرہیز اور اچھی بات ہی کرنے کا حکم ہے۔ خاموشی بھی عبادت ہے جب کوئی اچھی بات نہ ہو۔",
      category: "اخلاق",
    },
    {
      id: 3,
      book: "bukhari",
      bookName: "صحیح بخاری",
      number: "13",
      arabic:
        "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
      transliteration:
        "La yu'minu ahadukum hatta yuhibba li-akhihi ma yuhibbu linafsih",
      translation:
        "تم میں سے کوئی شخص اس وقت تک مومن نہیں ہو سکتا جب تک کہ اپنے بھائی کے لیے وہ پسند نہ کرے جو اپنے لیے پسند کرتا ہے",
      explanation:
        "مسلمانوں میں بھائی چارے اور ہمدردی کی تعلیم۔ دوسروں کے لیے وہی چاہنا جو اپنے لیے چاہتے ہیں، یہ ایمان کی تکمیل ہے۔",
      category: "اخوت",
    },
    {
      id: 4,
      book: "tirmidhi",
      bookName: "سنن ترمذی",
      number: "2516",
      arabic:
        "اتَّقِ اللَّهِ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
      transliteration:
        "Ittaqillaha haithuma kunta, wa atbi'is sai'yata alhasanata tamhaha, wa khaliqin nasa bi khuluqin hasan",
      translation:
        "جہاں کہیں بھی ہو اللہ سے ڈرتے رہو، برائی کے بعد نیکی کر لو وہ اسے مٹا دیتی ہے، اور لوگوں کے ساتھ اچھے اخلاق سے پیش آؤ",
      explanation:
        "ہر جگہ تقویٰ، گناہوں کے بعد نیکی سے تلافی، اور لوگوں کے ساتھ اچھے اخلاق کی تلقین۔ یہ تینوں باتیں کامیاب زندگی کے اصول ہیں۔",
      category: "اخلاق",
    },
    {
      id: 5,
      book: "bukhari",
      bookName: "صحیح بخاری",
      number: "52",
      arabic: "مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ",
      transliteration: "Min husni islamil mar'i tarkuhu ma la ya'nih",
      translation:
        "آدمی کے اچھے مسلمان ہونے میں یہ ہے کہ وہ غیر ضروری باتوں کو چھوڑ دے",
      explanation:
        "اچھے مسلمان کی پہچان یہ ہے کہ وہ فضول باتوں اور کاموں سے دور رہے۔ جو چیز اس کے لیے مفید نہ ہو، اس میں وقت ضائع نہ کرے۔",
      category: "زندگی",
    },
    {
      id: 6,
      book: "muslim",
      bookName: "صحیح مسلم",
      number: "2674",
      arabic:
        "الرَّاحِمُونَ يَرْحَمُهُمْ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الْأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
      transliteration:
        "Ar-raahimuna yarhamuhumur Rahman, irhamu man fil ardi yarhamkum man fis sama'i",
      translation:
        "رحم کرنے والوں پر رحمان رحم کرتا ہے، تم زمین والوں پر رحم کرو، آسمان والا تم پر رحم کرے گا",
      explanation:
        "رحم و کرم کی اہمیت۔ جو دوسروں پر رحم کرتا ہے، اللہ اس پر رحم کرتا ہے۔ یہ انسانوں اور جانوروں سب کے ساتھ رحم کا حکم ہے۔",
      category: "رحم",
    },
    {
      id: 7,
      book: "abudawud",
      bookName: "سنن ابو داؤد",
      number: "4940",
      arabic: "تَسَبَّحُوا وَهِيَ مَكْسُورَةٌ، وَكَبِّرُوا وَهِيَ مَخْسُورَةٌ",
      transliteration:
        "Tasabbahu wa hiya maksuratun, wa kabbiru wa hiya makhsuratun",
      translation:
        "رات کو ستارے ٹوٹتے ہوئے تسبیح کرو، اور صبح کو ستارے ڈوبتے ہوئے تکبیر کرو",
      explanation:
        "اللہ کی یاد کے اوقات۔ صبح اور شام کی تسبیح و تکبیر کی فضیلت۔ یہ معمول زندگی کو برکت سے بھر دیتا ہے۔",
      category: "اذکار",
    },
    {
      id: 8,
      book: "ibnmajah",
      bookName: "سنن ابن ماجہ",
      number: "224",
      arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
      transliteration: "Talabul ilmi faridatun ala kulli muslim",
      translation: "علم حاصل کرنا ہر مسلمان پر فرض ہے",
      explanation:
        "علم کی اہمیت۔ مرد و عورت، بوڑھے اور جوان، سب پر علم حاصل کرنا فرض ہے۔ دینی و دنیاوی دونوں علوم شامل ہیں۔",
      category: "علم",
    },
    {
      id: 9,
      book: "nasai",
      bookName: "سنن نسائی",
      number: "5004",
      arabic:
        "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ",
      transliteration:
        "Man salaka tariqan yaltamisu fihi ilman sahhallahu lahu tariqan ilal jannah",
      translation:
        "جو شخص علم حاصل کرنے کے لیے کسی راستے پر چلتا ہے، اللہ اس کے لیے جنت کا راستہ آسان کر دیتا ہے",
      explanation:
        "علم کی راہ میں چلنے والوں کے لیے جنت کی آسانی۔ علم کی تلاش میں نکلنا ہی عبادت ہے اور اس کا بہت بڑا اجر ہے۔",
      category: "علم",
    },
    {
      id: 10,
      book: "bukhari",
      bookName: "صحیح بخاری",
      number: "6011",
      arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
      transliteration:
        "Al-muslimu man salimal muslimuna min lisanihee wa yadih",
      translation:
        "مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں",
      explanation:
        "مسلمان کی تعریف۔ حقیقی مسلمان وہ ہے جو دوسروں کو اپنی زبان (باتوں) اور ہاتھ (کاموں) سے تکلیف نہ پہنچائے۔",
      category: "اخلاق",
    },
  ];

  const books = [
    { id: "all", name: "سب حدیثیں", color: "#27ae60" },
    { id: "bukhari", name: "صحیح بخاری", color: "#3498db" },
    { id: "muslim", name: "صحیح مسلم", color: "#9b59b6" },
    { id: "tirmidhi", name: "سنن ترمذی", color: "#e74c3c" },
    { id: "abudawud", name: "سنن ابو داؤد", color: "#f39c12" },
    { id: "nasai", name: "سنن نسائی", color: "#1abc9c" },
    { id: "ibnmajah", name: "سنن ابن ماجہ", color: "#34495e" },
  ];

  const filteredHadiths = hadiths.filter((hadith) => {
    const matchesBook = selectedBook === "all" || hadith.book === selectedBook;
    const matchesSearch =
      hadith.arabic.includes(searchTerm) ||
      hadith.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hadith.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesBook && matchesSearch;
  });

  const handleCopyHadith = (hadith) => {
    const text = `${hadith.arabic}\n\n${hadith.translation}\n\n${hadith.explanation}`;
    navigator.clipboard.writeText(text);
    alert("حدیث کاپی ہو گئی!");
  };

  return (
    <div className="hadiths-container">
      <Link to="/" className="nav-back">
        ← ہوم پیج
      </Link>

      <header className="hadiths-header">
        <h1>🕌 ضروری حدیثیں</h1>
        <p className="subtitle">رسول اللہ ﷺ کے قیمتی ارشادات</p>
      </header>

      <div className="controls-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="حدیث تلاش کریں..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="books-filter">
          <h3>حدیث کی کتابیں:</h3>
          <div className="books-list">
            {books.map((book) => (
              <button
                key={book.id}
                className={`book-btn ${
                  selectedBook === book.id ? "active" : ""
                }`}
                onClick={() => setSelectedBook(book.id)}
                style={{ "--book-color": book.color }}
              >
                {book.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="hadiths-count">
        {filteredHadiths.length} حدیثیں ملیں{" "}
        {selectedBook !== "all" &&
          `${books.find((b) => b.id === selectedBook)?.name} سے`}
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
                  {hadith.bookName}
                </span>
                <span className="hadith-number">حدیث #{hadith.number}</span>
              </div>
              <div className="category-tag">{hadith.category}</div>
            </div>

            <div className="arabic-hadith">
              <div className="arabic-text">{hadith.arabic}</div>
              <div className="transliteration">"{hadith.transliteration}"</div>
            </div>

            <div className="hadith-details">
              <div className="detail-section">
                <h4>ترجمہ:</h4>
                <p className="translation">{hadith.translation}</p>
              </div>

              <div className="detail-section">
                <h4>وضاحت:</h4>
                <p className="explanation">{hadith.explanation}</p>
              </div>
            </div>

            <div className="hadith-footer">
              <button
                className="copy-btn"
                onClick={() => handleCopyHadith(hadith)}
              >
                📋 حدیث کاپی کریں
              </button>
              <button
                className="save-btn"
                onClick={() =>
                  alert(
                    `"${hadith.bookName} حدیث #${hadith.number}" پسندیدہ میں محفوظ ہو گئی!`
                  )
                }
              >
                ⭐ محفوظ کریں
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredHadiths.length === 0 && (
        <div className="no-hadiths">
          <p>کوئی حدیث نہیں ملی۔ مختلف لفظ یا کتاب آزمائیں۔</p>
        </div>
      )}

      <footer className="hadiths-info">
        <h3>📚 حدیث کے بارے میں:</h3>
        <div className="info-grid">
          <div className="info-card">
            <h4>حدیث کیا ہے؟</h4>
            <p>
              حدیث رسول اللہ ﷺ کے قول، فعل یا تقریر کو کہتے ہیں۔ یہ قرآن کریم کے
              بعد اسلامی تعلیمات کا دوسرا بڑا ماخذ ہے۔
            </p>
          </div>
          <div className="info-card">
            <h4>صحاح ستہ</h4>
            <p>
              چھ مستند حدیث کی کتابیں: صحیح بخاری، صحیح مسلم، سنن ابو داؤد، سنن
              ترمذی، سنن نسائی، سنن ابن ماجہ۔
            </p>
          </div>
          <div className="info-card">
            <h4>حدیث پڑھنے کے فوائد</h4>
            <p>
              سیرت نبوی ﷺ سے آگاہی، اسلامی تعلیمات کا فہم، عملی زندگی کے لیے
              رہنمائی، آخرت میں نجات۔
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Hadiths;
