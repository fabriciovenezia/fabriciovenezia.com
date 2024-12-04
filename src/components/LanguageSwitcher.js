import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Español");
  const [bottomOffset, setBottomOffset] = useState(24); 
  const [isScrolling, setIsScrolling] = useState(false); 
  const navigate = useNavigate();
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    if (language === "Español") {
      navigate("/");
    } else if (language === "English") {
      navigate("/en");
    }
  };
  const languages = ["Español", "English"];

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const newBottomOffset = Math.max(10, 24 - (800 - windowHeight) * 0.03);
      setBottomOffset(newBottomOffset);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 900) {  
        if (window.scrollY > 0) {
          setIsScrolling(true);  
        } else {
          setIsScrolling(false); 
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`language-switcher ${isScrolling ? "hidden" : ""}`} 
      style={{
        bottom: `${bottomOffset}px`, 
      }}
    >
      {languages.map((language) => (
        <div
          key={language}
          className={`language-option ${
            selectedLanguage === language ? "selected" : ""
          }`}
          onClick={() => handleLanguageChange(language)}
        >
          {language}
          <div className="underline"></div> 
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
