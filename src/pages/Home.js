import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import BiographySection from "./BiographySection";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import ProfessionalSection from "./ProfessionalSection";
import "../styles/App.css";
import doctorImage from "../assets/doctor.JPEG";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("biography");
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  const categories = ["biography", "professional", "education", "contact"];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        setIsScrolling(window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const renderContent = () => {
    switch (selectedCategory) {
      case "contact":
        return <ContactSection />;
      case "education":
        return <EducationSection />;
      case "professional":
        return <ProfessionalSection />;
      default:
        return <BiographySection text={t(selectedCategory)} />;
    }
  };

  return (
    <div className="app-container">
      <div className="content-area">
        {isMobile && <LanguageSwitcher isScrolling={isScrolling} />}
        <Header
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {renderContent()}
        {isMobile && (
          <div className="fixed-image-wrapper">
            <img
              src={doctorImage}
              alt="Dr. Fabricio Venezia"
              className="fixed-image"
            />
          </div>
        )}
      </div>
      {!isMobile && <LanguageSwitcher isScrolling={isScrolling} />}
      {!isMobile && (
        <div className="fixed-image-wrapper">
          <img
            src={doctorImage}
            alt="Dr. Fabricio Venezia"
            className="fixed-image"
          />
        </div>
      )}
    </div>
  );
};

export default Home;
