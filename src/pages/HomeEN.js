import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import LanguageSwitcher from "../components/LanguageSwitcher";
import "../styles/App.css";
import doctorImage from "../assets/doctor.JPEG";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Biography");
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false); 

  const categories = ["Biography", "Professional Experience", "Education", "Contact"];

  const categoryTexts = {
    Biography: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque erat sit amet eros dictum, ac hendrerit metus tristique. Curabitur sit amet tempor turpis, et varius diam. Nam efficitur libero commodo, vestibulum magna nec, gravida nisi. Ut sit amet maximus lacus, sed facilisis est. Integer gravida sed dolor at iaculis. Ut dictum arcu sagittis nibh ullamcorper, ac mattis tellus molestie. Pellentesque cursus quam eget nisi dignissim, at molestie felis commodo. Curabitur eget tortor interdum, suscipit libero eget, rhoncus ligula. Morbi elementum suscipit nibh at convallis. Praesent condimentum scelerisque nibh at bibendum. Integer tristique tempus arcu, sit amet gravida libero pulvinar scelerisque. Morbi lectus nisl, fermentum nec orci a, ultricies interdum libero. Vestibulum felis purus, gravida dignissim tincidunt sit amet, congue eu erat. Fusce tincidunt, massa vitae hendrerit tincidunt, erat tortor mattis nulla, ultricies elementum dolor metus sit amet felis. Mauris semper pellentesque urna, vitae feugiat justo lobortis quis.

      Suspendisse aliquet felis sed ipsum ultricies, sit amet scelerisque urna dignissim. Donec semper varius nisi nec condimentum. Aenean id fringilla neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse suscipit risus eu mi iaculis pulvinar. Cras tincidunt ut felis sit amet cursus. Pellentesque aliquet facilisis libero eget bibendum. Phasellus tincidunt semper enim, imperdiet tincidunt felis dignissim sit amet. Curabitur justo justo, efficitur non bibendum tristique, pellentesque vel massa. Nulla ut sollicitudin augue, elementum malesuada urna. Vestibulum ullamcorper felis sem, eu mattis elit tempor a. Ut accumsan arcu ut odio porta sollicitudin. Nulla feugiat diam ac finibus elementum. Ut dapibus semper semper.

      Donec ipsum quam, hendrerit et pharetra quis, dignissim vitae erat. Sed ultricies, dui sit amet vehicula molestie, nibh magna volutpat magna, quis ultricies libero felis egestas tortor. Curabitur eu imperdiet sapien. Phasellus lacus velit, eleifend ac nisi ut, ullamcorper lobortis tellus. Pellentesque mauris ipsum, interdum ut efficitur eu, sodales sit amet augue. Vestibulum aliquet eu nibh vitae congue. Sed volutpat, risus nec sagittis hendrerit, nibh metus ultricies diam, et vehicula nisl est et nisi. Nulla mattis tellus est, vel placerat leo faucibus ac. Curabitur nec hendrerit dolor. Nulla urna mi, cursus vitae libero quis, sodales dapibus orci. Aenean vel augue et ipsum lobortis euismod. Pellentesque in erat nec urna imperdiet efficitur in congue justo.

      Sed ac mauris ultrices nisi congue auctor non vitae mi. Ut eleifend justo consectetur tellus tincidunt, vel molestie dolor sodales. Vivamus finibus tempor iaculis. Donec at sagittis est, id mollis dui. Pellentesque ut sagittis lectus, hendrerit congue lacus. Ut sit amet sem eget urna lacinia gravida non dapibus nisl. Sed enim ex, feugiat ut arcu aliquam, scelerisque blandit orci. Sed lobortis arcu bibendum massa vulputate, eu semper justo rhoncus. Vestibulum at finibus tortor, rutrum vulputate velit. Suspendisse eget elit quis lorem commodo ultricies sed nec odio. Integer a placerat mauris, nec dignissim tellus. Sed diam lectus, consectetur sed fermentum vitae, ornare vel tellus. Cras nunc sem, convallis ac ligula nec, ullamcorper feugiat eros. Etiam a mauris sed tortor lacinia sollicitudin dapibus vel sapien.

      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dapibus, urna quis pellentesque fermentum, ligula diam dignissim nisl, in pharetra velit metus a enim. Fusce faucibus ac leo sit amet volutpat. Nullam mollis urna a nunc pharetra viverra. Vestibulum vehicula neque eget lorem imperdiet, eu rhoncus magna dapibus. Curabitur sapien eros, blandit non eleifend sed, tincidunt in nunc. Nulla consectetur porttitor luctus. Proin in urna convallis, volutpat dolor ut, imperdiet leo. Pellentesque turpis tortor, rutrum ac tellus vulputate, efficitur consequat nisl. Vivamus eget lectus sed tellus interdum ultricies. Nunc gravida, metus vitae commodo sagittis, ligula dui euismod augue, ac auctor urna mauris sed dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras nec dolor orci. Vivamus tincidunt magna eu sodales accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    `,
    "Professional Experience": "Texto sobre la experiencia profesional.",
    Education: `
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
    Contact: `
    <strong>Fabricio Venezia:</strong>
    <a href="mailto:fabricio@odontologiavenezia.com" target="_blank">fabricio@odontologiavenezia.com</a> - Email
    <a href="https://www.fabriciovenezia.com" target="_blank">www.fabriciovenezia.com</a> - Website
    <a href="https://www.instagram.com/od.fabriciovenezia/" target="_blank">@od.fabriciovenezia</a> - Instagram
    <a href="https://wa.me/+543415935355" target="_blank">+54 341 5945355</a> - WhatsApp
    ‎    
    <strong>Odontologia Venezia:</strong>
    <a href="mailto:contacto@odontologiavenezia.com" target="_blank">contacto@odontologiavenezia.com</a> - Email
    <a href="https://www.odontologiavenezia.com" target="_blank">www.odontologiavenezia.com</a> - Website
    <a href="https://www.instagram.com/odontologiavenezia/" target="_blank">@odontologiavenezia</a> - Instagram
    <a href="tel:+543418369025" target="_blank">+54 341 8369025</a> - Cellphone 
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