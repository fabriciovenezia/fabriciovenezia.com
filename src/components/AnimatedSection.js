import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types"; // Import PropTypes

const AnimatedSection = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// Define prop types
AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired, // 'children' should be any renderable content
  className: PropTypes.string, // 'className' is optional and should be a string
};

export default AnimatedSection;