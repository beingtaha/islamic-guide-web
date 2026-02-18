import React, { createContext, useState } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("urdu"); // 'urdu' or 'english'

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "urdu" ? "english" : "urdu"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
