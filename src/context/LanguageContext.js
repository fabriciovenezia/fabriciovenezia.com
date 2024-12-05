import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("es");
  const navigate = useNavigate();

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    navigate(lang === "es" ? "/" : "/en");
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Define prop types
LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired, // 'children' should be any renderable content
};

export const useLanguage = () => useContext(LanguageContext);