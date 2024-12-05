import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const navigate = useNavigate();

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    navigate(lang === 'es' ? '/' : '/en');
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext); 