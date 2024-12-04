import React from "react";
import "../styles/Header.css";

const Header = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="header-container">
      <h1>Dr. Fabricio Venezia</h1>
      <div className="menu">
        {categories.map((category) => (
          <div
            key={category}
            className={`menu-item ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
            <div className={`underline ${selectedCategory === category ? "show" : ""}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
