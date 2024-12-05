import { useState, useEffect } from "react";

const useScrollVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 900) {
        setIsVisible(window.scrollY === 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
};

export default useScrollVisibility;
