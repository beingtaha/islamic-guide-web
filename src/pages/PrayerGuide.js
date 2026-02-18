import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import "./PrayerGuide.css";

function PrayerGuide() {
  const { isDarkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [currentStep, setCurrentStep] = useState(0);

  // Force re-render when language or theme changes
  useEffect(() => {
    // This forces the component to re-render
  }, [language, isDarkMode]);

  const prayerSteps = [
    {
      id: 1,
      titleUrdu: "نیت",
      titleEng: "Niyat (Intention)",
      arabic: "نَوَيْتُ أَنْ أُصَلِّيَ",
      transliteration: "Nawaitu an usalli",
      translationUrdu: "میں نے نیت کی نماز پڑھنے کی",
      translationEng: "I intend to pray",
      descriptionUrdu:
        "دل میں نیت کریں کہ کونسی نماز پڑھ رہے ہیں۔ نیت دل سے ہے، زبان سے بولنا ضروری نہیں۔",
      descriptionEng:
        "Make intention in your heart which prayer you are offering. Intention is from the heart, not necessary to speak.",
      image: "🤲",
      tipUrdu: "نیت کا مطلب ہے ارادہ۔ ہر نماز سے پہلے دل میں نیت کریں۔",
      tipEng:
        "Intention means purpose. Make intention in your heart before every prayer.",
    },
    {
      id: 2,
      titleUrdu: "تکبیر تحریمہ",
      titleEng: "Takbir-e-Tahrima",
      arabic: "اللهُ أَكْبَرُ",
      transliteration: "Allahu Akbar",
      translationUrdu: "اللہ سب سے بڑا ہے",
      translationEng: "Allah is the Greatest",
      descriptionUrdu:
        "دونوں ہاتھ کانوں تک اٹھائیں، انگوٹھے کانوں کے لوب کے سامنے ہوں، اور اللہ اکبر کہیں۔",
      descriptionEng:
        "Raise both hands to the ears, thumbs touching earlobes, and say Allahu Akbar.",
      image: "🙌",
      tipUrdu: "تکبیر کے بعد نماز شروع ہو جاتی ہے، بات چیت بند کریں۔",
      tipEng: "Prayer begins after Takbir, stop all conversations.",
    },
    {
      id: 3,
      titleUrdu: "قیام",
      titleEng: "Qiyam (Standing)",
      arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ",
      transliteration: "Subhanaka Allahumma wa bihamdika",
      translationUrdu:
        "اے اللہ! میں تیری پاکی بیان کرتا ہوں اور تیری تعریف کرتا ہوں",
      translationEng: "Glory be to You, O Allah, and all praise is Yours",
      descriptionUrdu:
        "سیدھے کھڑے ہو کر، دایاں ہاتھ بائیں ہاتھ پر رکھ کر ناف کے نیچے باندھیں۔ پہلے ثنا پڑھیں، پھر سورۃ فاتحہ اور کوئی اور سورۃ۔",
      descriptionEng:
        "Stand straight, place right hand over left below navel. Recite Sana, then Surah Fatiha and another Surah.",
      image: "🧍",
      tipUrdu: "قراءت دھیرے آواز میں کریں، صرف اپنے سننے کی آواز میں۔",
      tipEng: "Recite quietly, only loud enough for yourself to hear.",
    },
    {
      id: 4,
      titleUrdu: "رکوع",
      titleEng: "Ruku (Bowing)",
      arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
      transliteration: "Subhana Rabbiyal Azeem",
      translationUrdu: "میرا رب بہت عظیم ہے",
      translationEng: "Glory to my Lord, the Most Great",
      descriptionUrdu:
        "کمر جھکائیں، گھٹنوں کو پکڑیں، پیٹھ سیدھی رکھیں، سر سیدھا رکھیں۔ تین مرتبہ 'سبحان ربی العظیم' کہیں۔",
      descriptionEng:
        "Bow down, hold your knees, keep your back straight, head level. Say 'Subhana Rabbiyal Azeem' three times.",
      image: "🙇",
      tipUrdu: "رکوع میں اتنا جھکیں کہ ہاتھ گھٹنوں تک پہنچ جائیں۔",
      tipEng: "Bow until your hands reach your knees.",
    },
    {
      id: 5,
      titleUrdu: "قومہ",
      titleEng: "Qawmah (Standing after Ruku)",
      arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
      transliteration: "Sami' Allahu liman hamidah",
      translationUrdu: "اللہ نے اس کی تعریف سن لی جو اس کی حمد کرتا ہے",
      translationEng: "Allah hears those who praise Him",
      descriptionUrdu:
        "رکوع سے اٹھ کر سیدھے کھڑے ہو جائیں اور 'سمع اللہ لمن حمدہ' کہیں، پھر 'ربنا لک الحمد' کہیں۔",
      descriptionEng:
        "Stand up straight from ruku and say 'Sami' Allahu liman hamidah', then 'Rabbana lakal hamd'.",
      image: "🕴️",
      tipUrdu: "قومہ میں تھوڑا سا رک کر پھر سجدے میں جائیں۔",
      tipEng: "Pause briefly in Qawmah before going to sajdah.",
    },
    {
      id: 6,
      titleUrdu: "سجدہ",
      titleEng: "Sajdah (Prostration)",
      arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
      transliteration: "Subhana Rabbiyal A'la",
      translationUrdu: "میرا رب بہت اعلیٰ ہے",
      translationEng: "Glory to my Lord, the Most High",
      descriptionUrdu:
        "پہلے گھٹنے، پھر ہاتھ، پھر ناک اور پھر ماتھا زمین پر رکھ کر سجدہ کریں۔ انگلیاں قبلہ کی طرف ہوں۔ تین مرتبہ دعا پڑھیں۔",
      descriptionEng:
        "Place knees, then hands, then nose and forehead on the ground. Fingers pointing towards Qibla. Recite three times.",
      image: "🤲",
      tipUrdu:
        "سجدے میں پیشانی، ناک، دونوں ہاتھ، دونوں گھٹنے اور پاؤں کی انگلیاں زمین پر لگنی چاہئیں۔",
      tipEng:
        "Forehead, nose, both hands, both knees, and toes should touch the ground.",
    },
    {
      id: 7,
      titleUrdu: "جلسہ",
      titleEng: "Jalsa (Sitting between Sajdahs)",
      arabic: "رَبِّ اغْفِرْ لِي",
      transliteration: "Rabbighfir li",
      translationUrdu: "اے میرے رب! مجھے معاف فرما",
      translationEng: "O my Lord! Forgive me",
      descriptionUrdu:
        "پہلے سجدے سے اٹھ کر بیٹھ جائیں، بائیں پاؤں کو بچھائیں، دایاں پاؤں کھڑا رکھیں، اس پر بیٹھیں۔ 'رب اغفر لی' کہیں۔",
      descriptionEng:
        "Sit up from first sajdah, spread left foot, keep right foot upright, sit on it. Say 'Rabbighfir li'.",
      image: "🧘",
      tipUrdu: "جلسہ میں اتنی دیر بیٹھیں کہ جسم مستحکم ہو جائے۔",
      tipEng: "Sit in Jalsa until body stabilizes.",
    },
    {
      id: 8,
      titleUrdu: "تشہد",
      titleEng: "Tashahhud (Final Sitting)",
      arabic: "التَّحِيَّاتُ لِلَّهِ",
      transliteration: "Attahiyyatu lillahi",
      translationUrdu: "تمام تعریفیں اللہ کے لیے ہیں",
      translationEng: "All greetings are for Allah",
      descriptionUrdu: "آخری رکعت میں تشہد، درود شریف اور دعا ماثورہ پڑھیں۔",
      descriptionEng:
        "In final rakah, recite Tashahhud, Durood, and Dua-e-Masura.",
      image: "🙏",
      tipUrdu: "تشہد میں شہادت کی انگلی اٹھائیں اور ہلائیں۔",
      tipEng: "Raise and move the index finger during Tashahhud.",
    },
    {
      id: 9,
      titleUrdu: "سلام",
      titleEng: "Salam (Ending Prayer)",
      arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
      transliteration: "Assalamu alaikum wa rahmatullah",
      translationUrdu: "آپ پر سلامتی ہو اور اللہ کی رحمت",
      translationEng: "Peace be upon you and the mercy of Allah",
      descriptionUrdu:
        "پہلے دائیں طرف سلام پھیریں، پھر بائیں طرف۔ اس کے ساتھ نماز ختم ہو جاتی ہے۔",
      descriptionEng:
        "First turn right and say Salam, then turn left. This completes the prayer.",
      image: "🕊️",
      tipUrdu: "سلام کے بعد تسبیح اور دعا کر سکتے ہیں۔",
      tipEng: "After Salam, you can recite Tasbih and make dua.",
    },
  ];

  const nextStep = () => {
    if (currentStep < prayerSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const currentStepData = prayerSteps[currentStep];

  // Get current text based on language
  const getTitle = () =>
    language === "urdu" ? currentStepData.titleUrdu : currentStepData.titleEng;
  const getTranslation = () =>
    language === "urdu"
      ? currentStepData.translationUrdu
      : currentStepData.translationEng;
  const getDescription = () =>
    language === "urdu"
      ? currentStepData.descriptionUrdu
      : currentStepData.descriptionEng;
  const getTip = () =>
    language === "urdu" ? currentStepData.tipUrdu : currentStepData.tipEng;

  return (
    <div className={`guide-container ${isDarkMode ? "dark" : "light"}`}>
      <Link to="/" className="nav-back">
        {language === "urdu" ? "← ہوم پیج" : "← Home"}
      </Link>

      <h1>
        {language === "urdu"
          ? "📿 نماز کا مکمل طریقہ"
          : "📿 Complete Prayer Guide"}
      </h1>
      <p className="subtitle">
        {language === "urdu"
          ? "عربی، اردو اور انگریزی میں مرحلہ وار رہنمائی"
          : "Step-by-Step Guide with Arabic, Urdu & English"}
      </p>

      <div className="progress-section">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((currentStep + 1) / prayerSteps.length) * 100}%`,
            }}
          ></div>
        </div>
        <div className="step-counter">
          {language === "urdu"
            ? `مرحلہ ${currentStep + 1} از ${prayerSteps.length}`
            : `Step ${currentStep + 1} of ${prayerSteps.length}`}
        </div>
      </div>

      <div className="step-navigation">
        {prayerSteps.map((step, index) => (
          <button
            key={step.id}
            className={`step-dot ${index === currentStep ? "active" : ""} ${index < currentStep ? "completed" : ""}`}
            onClick={() => goToStep(index)}
            title={
              language === "urdu" ? `مرحلہ ${index + 1}` : `Step ${index + 1}`
            }
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="step-card">
        <div className="step-header">
          <div className="step-image">{currentStepData.image}</div>
          <div className="step-title-section">
            <h2>{getTitle()}</h2>
            <span className="step-number">
              {language === "urdu"
                ? `مرحلہ ${currentStepData.id}`
                : `Step ${currentStepData.id}`}
            </span>
          </div>
        </div>

        <div className="arabic-section">
          <div className="arabic-text">{currentStepData.arabic}</div>
          <p className="transliteration">"{currentStepData.transliteration}"</p>
        </div>

        <div className="translation-section">
          <h3>{language === "urdu" ? "ترجمہ:" : "Translation:"}</h3>
          <p className="translation-text">"{getTranslation()}"</p>
        </div>

        <div className="description-section">
          <h3>{language === "urdu" ? "طریقہ:" : "Method:"}</h3>
          <p className="description-text">{getDescription()}</p>
        </div>

        <div className="tip-section">
          <h4>{language === "urdu" ? "💡 ٹپ:" : "💡 Tip:"}</h4>
          <p className="tip-text">{getTip()}</p>
        </div>
      </div>

      <div className="navigation-buttons">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`nav-btn prev-btn ${currentStep === 0 ? "disabled" : ""}`}
        >
          {language === "urdu" ? "← پچھلا مرحلہ" : "← Previous Step"}
        </button>

        <button
          onClick={nextStep}
          disabled={currentStep === prayerSteps.length - 1}
          className={`nav-btn next-btn ${currentStep === prayerSteps.length - 1 ? "disabled" : ""}`}
        >
          {currentStep === prayerSteps.length - 1
            ? language === "urdu"
              ? "مکمل"
              : "Complete"
            : language === "urdu"
              ? "اگلا مرحلہ →"
              : "Next Step →"}
        </button>
      </div>

      <div className="quick-tips">
        <h3>
          {language === "urdu"
            ? "📝 نماز کے لیے فوری ٹپس:"
            : "📝 Quick Tips for Prayer:"}
        </h3>
        <ul>
          <li>
            {language === "urdu"
              ? "❤️ دل سے خشوع و خضوع کے ساتھ پڑھیں"
              : "❤️ Pray with humility and concentration"}
          </li>
          <li>
            {language === "urdu"
              ? "⏱️ ہر رکن اتنی دیر کریں کہ جسم ٹھہر جائے"
              : "⏱️ Pause at each posture until body is still"}
          </li>
          <li>
            {language === "urdu"
              ? "🧘 ہر حالت میں تسکین رکھیں"
              : "🧘 Maintain composure in every position"}
          </li>
          <li>
            {language === "urdu"
              ? "📖 ترتیب کا خیال رکھیں"
              : "📖 Maintain proper order"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PrayerGuide;
