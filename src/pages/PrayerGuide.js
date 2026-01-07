import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PrayerGuide.css";

function PrayerGuide() {
  const [currentStep, setCurrentStep] = useState(0);

  const prayerSteps = [
    {
      id: 1,
      title: "Niyat (Intention)",
      arabic: "نَوَيْتُ أَنْ أُصَلِّيَ",
      transliteration: "Nawaitu an usalli",
      translation: "Main ne niyat ki namaz padhne ki",
      description:
        "Dil mein niyat karein ke konsi namaz padh rahe hain. Niyat dil se hai, zubaan se bolna zaroori nahi.",
      image: "🤲",
      tip: "Niyat ka matlab hai intention. Har namaz se pehle dil se niyat karein.",
    },
    {
      id: 2,
      title: "Takbir-e-Tahrima",
      arabic: "اللهُ أَكْبَرُ",
      transliteration: "Allahu Akbar",
      translation: "Allah sab se bada hai",
      description:
        "Donon haath kaanon tak uthayein, anguthay kaano ke lob ke samne ho, aur Allahu Akbar kahein.",
      image: "🙌",
      tip: "Takbir ke baad namaz shuru ho jati hai, baat cheet band karein.",
    },
    {
      id: 3,
      title: "Qiyam (Standing)",
      arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ",
      transliteration: "Subhanaka Allahumma wa bihamdika",
      translation:
        "Aye Allah! Main teri paaki bayan karta hoon aur teri tareef karta hoon",
      description:
        "Seedha khade ho kar, right hand ko left hand par rakh kar naaf ke neeche bandhein. Pehle Sana parhein, phir Surah Fatiha aur koi aur Surah.",
      image: "🧍",
      tip: "Qiraat dheere awaaz mein karein, sirf apne sunne ki awaaz mein.",
    },
    {
      id: 4,
      title: "Ruku (Bowing)",
      arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
      transliteration: "Subhana Rabbiyal Azeem",
      translation: "Mera Rabb bohat azeem hai",
      description:
        "Kamar jhukayein, ghutno ko pakrein, peeth seedhi rakhein, sar seedha rakhein. Teen martaba 'Subhana Rabbiyal Azeem' kahein.",
      image: "🙇",
      tip: "Ruku mein itna jhukein ke haath ghutno tak pahunchein.",
    },
    {
      id: 5,
      title: "Qawmah (Standing after Ruku)",
      arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
      transliteration: "Sami' Allahu liman hamidah",
      translation: "Allah ne uski tareef sun li jo uski hamd kare",
      description:
        "Ruku se uth kar seedha khade ho jayein aur 'Sami' Allahu liman hamidah' kahein, phir 'Rabbana lakal hamd' kahein.",
      image: "🕴️",
      tip: "Qawmah mein thora sa ruk kar phir sajde mein jayein.",
    },
    {
      id: 6,
      title: "Sajdah (Prostration)",
      arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
      transliteration: "Subhana Rabbiyal A'la",
      translation: "Mera Rabb bohat aala hai",
      description:
        "Pehle ghutne, phir haath, phir naak aur phir matha zameen par rakh kar sajda karein. Ungliyan qibla ki taraf hon. Teen martaba dua parhein.",
      image: "🤲",
      tip: "Sajde mein peshaani, naak, dono haath, dono ghutne aur paon ki ungliyan zameen lagne chahiye.",
    },
    {
      id: 7,
      title: "Jalsa (Sitting between Sajdah)",
      arabic: "رَبِّ اغْفِرْ لِي",
      transliteration: "Rabbighfir li",
      translation: "Aye mere Rabb! Mujhe maaf kar de",
      description:
        "Pehle sajde se uth kar baith jayein, baithne ka tareeqa: left paanv ko bichayein, right paanv khada rakhein, us par baithein. 'Rabbighfir li' kahein.",
      image: "🧘",
      tip: "Jalsa mein itni dair baithein ke jism stabilize ho jaye.",
    },
    {
      id: 8,
      title: "Tashahhud (Final Sitting)",
      arabic: "التَّحِيَّاتُ لِلَّهِ",
      transliteration: "Attahiyyatu lillahi",
      translation: "Har tarah ki taazeem Allah ke liye hai",
      description:
        "Akri rakat mein Tashahhud, Durood Shareef aur Dua-e-Masura parhein.",
      image: "🙏",
      tip: "Tashahhud mein shahadat ki ungli uthayein aur hilaayein.",
    },
    {
      id: 9,
      title: "Salam (Ending Prayer)",
      arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
      transliteration: "Assalamu alaikum wa rahmatullah",
      translation: "Aap par salamti ho aur Allah ki rehmat",
      description:
        "Pehle right side ko salam pherein, phir left side ko. Iske saath namaz khatam ho jati hai.",
      image: "🕊️",
      tip: "Salam ke baad tasbeeh aur dua kar sakte hain.",
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

  return (
    <div className="guide-container">
      <Link to="/" className="nav-back">
        ← Back to Home
      </Link>

      <h1>📿 Namaz ka Mukammal Tarika</h1>
      <p className="subtitle">Step-by-Step Guide with Arabic, Urdu & English</p>

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
          Step {currentStep + 1} of {prayerSteps.length}
        </div>
      </div>

      <div className="step-navigation">
        {prayerSteps.map((step, index) => (
          <button
            key={step.id}
            className={`step-dot ${index === currentStep ? "active" : ""} ${
              index < currentStep ? "completed" : ""
            }`}
            onClick={() => goToStep(index)}
            title={`Step ${index + 1}: ${step.title}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="step-card">
        <div className="step-header">
          <div className="step-image">{prayerSteps[currentStep].image}</div>
          <div className="step-title-section">
            <h2>{prayerSteps[currentStep].title}</h2>
            <span className="step-number">
              Step {prayerSteps[currentStep].id}
            </span>
          </div>
        </div>

        <div className="arabic-section">
          <div className="arabic-text">{prayerSteps[currentStep].arabic}</div>
          <p className="transliteration">
            "{prayerSteps[currentStep].transliteration}"
          </p>
        </div>

        <div className="translation-section">
          <h3>Translation:</h3>
          <p>"{prayerSteps[currentStep].translation}"</p>
        </div>

        <div className="description-section">
          <h3>Method:</h3>
          <p>{prayerSteps[currentStep].description}</p>
        </div>

        <div className="tip-section">
          <h4>💡 Tip:</h4>
          <p>{prayerSteps[currentStep].tip}</p>
        </div>
      </div>

      <div className="navigation-buttons">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`nav-btn prev-btn ${currentStep === 0 ? "disabled" : ""}`}
        >
          ← Previous Step
        </button>

        <button
          onClick={nextStep}
          disabled={currentStep === prayerSteps.length - 1}
          className={`nav-btn next-btn ${
            currentStep === prayerSteps.length - 1 ? "disabled" : ""
          }`}
        >
          {currentStep === prayerSteps.length - 1 ? "Complete" : "Next Step →"}
        </button>
      </div>

      <div className="quick-tips">
        <h3>📝 Quick Tips for Perfect Prayer:</h3>
        <ul>
          <li>❤️ Dil se khushu-o-khuzu ke saath padhein</li>
          <li>⏱️ Har rukn itni dair karein ke thahar jayein</li>
          <li>🧘 Har halat mein tameen (stability) rakhein</li>
          <li>📖 Tartib ka khayal rakhein</li>
          <li>🤲 Dua mein dil laga kar maangein</li>
        </ul>
      </div>
    </div>
  );
}

export default PrayerGuide;
