import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import LanguageSwitcher from "../components/LanguageSwitcher";
import "../styles/App.css";
import doctorImage from "../assets/doctor.JPEG";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Biografía");
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view

  const categories = ["Biografía", "Experiencia Profesional", "Educación", "Contacto"];

  const categoryTexts = {
    Biografía: `"Lorem ipsum...
    Lol
    `,
    "Experiencia Profesional": `
Lol
    `,
    Educación: `
      1990 - Graduado en Odontología, Universidad Nacional de Rosario.  
      1991 - Diplomado en Odontología.  
      2001 - Diplomado en Técnica de Mollin y Arco Recto, SAO (308 horas cátedra).  
      Formación continua de posgrado (1992-2018):  
        High Velocity Orthodontics.  
        Técnicas MBT, Roth y Rickets en ortodoncia.  
        Ortopedia funcional y Ortodoncia rápida.  
        Tratamiento de retrognasia y promandibulismo con máscara de Delaire-Verdon.  
        Implantología dental aplicada a ortodoncia y periodoncia.  
        Prótesis fija y removible, sistemas retenidos por ataches, pernos, imanes y barras tangenciales.  
        Cirugía gingival y periodontal con láser y cauterio.  
        Rehabilitación protésica sobre implantes de una fase quirúrgica.  
        Tratamiento de disfunción de ATM, dolores faciales y cefaleas persistentes.
    `,
    Contacto: `
    <strong>Fabricio Venezia:</strong>
    <a href="mailto:fabricio@odontologiavenezia.com" target="_blank">fabricio@odontologiavenezia.com</a> - Email
    <a href="https://www.fabriciovenezia.com" target="_blank">www.fabriciovenezia.com</a> - Sitio Web
    <a href="https://www.instagram.com/od.fabriciovenezia/" target="_blank">@od.fabriciovenezia</a> - Instagram
    <a href="https://wa.me/+543415935355" target="_blank">+54 341 5945355</a> - WhatsApp
    ‎    
    <strong>Odontologia Venezia:</strong>
    <a href="mailto:contacto@odontologiavenezia.com" target="_blank">contacto@odontologiavenezia.com</a> - Email
    <a href="https://www.odontologiavenezia.com" target="_blank">www.odontologiavenezia.com</a> - Sitio Web
    <a href="https://www.instagram.com/odontologiavenezia/" target="_blank">@odontologiavenezia</a> - Instagram
    <a href="tel:+543418369025" target="_blank">+54 341 8369025</a> - Teléfono
    `,
};

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900); 
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        setIsScrolling(window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <div className="app-container">
      <div className="content-area">
        {isMobile && <LanguageSwitcher isScrolling={isScrolling} />}
        <Header
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Content text={categoryTexts[selectedCategory]} />
        {isMobile && (
          <div className="fixed-image-wrapper">
            <img src={doctorImage} alt="Dr. Fabricio Venezia" className="fixed-image" />
          </div>
        )}
      </div>
      {!isMobile && <LanguageSwitcher isScrolling={isScrolling} />}
      {!isMobile && (
        <div className="fixed-image-wrapper">
          <img src={doctorImage} alt="Dr. Fabricio Venezia" className="fixed-image" />
        </div>
      )}
    </div>
  );
}

export default Home;