import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./LanguageToggle.css";

function LanguageToggle() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button className="language-toggle" onClick={toggleLanguage}>
      {language === "urdu" ? "🇵🇰 اردو" : "🇬🇧 English"}
    </button>
  );
}

export default LanguageToggle;
