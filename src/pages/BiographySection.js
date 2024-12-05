import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "../styles/Content.css";

const ANIMATION_CONFIG = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

const BiographySection = ({ text }) => {
  const paragraphs = text.split("\n").filter(para => para.trim() !== "");

  return (
    <motion.div
      className="content-text biography-text"
      key={text}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {paragraphs.map((para, index) => (
        <motion.p key={`para-${index}`} {...ANIMATION_CONFIG}>
          {para}
        </motion.p>
      ))}
    </motion.div>
  );
};

BiographySection.propTypes = {
  text: PropTypes.string.isRequired
};

export default BiographySection;
