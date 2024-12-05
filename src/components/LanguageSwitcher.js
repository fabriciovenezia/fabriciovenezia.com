import React from "react";
import { useTranslation } from "react-i18next";

import useScrollVisibility from "../hooks/useScrollVisibility";
import "../styles/LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const isVisible = useScrollVisibility();

  const LANGUAGES = [
    { code: "es", label: "Español" },
    { code: "en", label: "English" }
  ];

  return (
    <div className={`language-switcher ${!isVisible ? "hidden" : ""}`}>
      {LANGUAGES.map(({ code, label }) => (
        <div
          key={code}
          className={`language-option ${
            i18n.language === code ? "selected" : ""
          }`}
          onClick={() => i18n.changeLanguage(code)}
        >
          {label}
          <div className="underline"></div>
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
