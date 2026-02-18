import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./ThemeToggle.css";

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`theme-toggle ${isDarkMode ? "dark" : "light"}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
