import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "../styles/Header.css";

const Header = ({ categories, selectedCategory, setSelectedCategory }) => {
  const { t } = useTranslation();
  
  const handleKeyPress = (event, category) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelectedCategory(category);
    }
  };

  return (
    <header className="header-container">
      <h1>Dr. Fabricio Venezia</h1>
      <nav className="menu" role="navigation">
        {categories.map((category) => (
          <div
            key={category}
            className={`menu-item ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
            onKeyPress={(e) => handleKeyPress(e, category)}
            role="button"
            tabIndex={0}
            aria-pressed={selectedCategory === category}
            aria-label={`Select ${category} category`}
          >
            {t(`categories.${category}`)}
            <div 
              className={`underline ${selectedCategory === category ? "show" : ""}`}
              aria-hidden="true"
            />
          </div>
        ))}
      </nav>
    </header>
  );
};

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
};

export default Header;
