import React, { useMemo } from "react";
import { motion } from "framer-motion";
import "../styles/Content.css";

const Content = ({ text }) => {
  const isEducation = text.includes("1990");
  const isContacto = text.includes("fabricio@odontologiavenezia.com");
  const processContactoText = (text) => {
    const lines = text.split("\n");
    return lines.map((line, index) => {
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="contact-line"
        >
          <span
            dangerouslySetInnerHTML={{
              __html: line,
            }}
          />
        </motion.div>
      );
    });
  };
  const lines = isEducation
    ? text.split("\n").filter(line => line.trim() !== "")
    : [text];
  const intro = isEducation ? lines.slice(0, 4).join("\n") : text;
  const listItems = isEducation ? lines.slice(4) : []; 
  const processedContactoText = useMemo(() => {
    return processContactoText(text);
  }, [text]);
  const introParagraphs = intro.split("\n").map((para, index) => (
    <motion.p
      key={`intro-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {para}
    </motion.p>
  ));
  const list = isEducation ? (
    <motion.ul
      className="education-list"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {listItems.map((item, index) => (
        <li key={`list-${index}`}>{item}</li>
      ))}
    </motion.ul>
  ) : null;

  return (
    <motion.div
      className={`content-text ${isEducation ? "education-text" : ""}`}
      key={text} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isContacto ? processedContactoText : introParagraphs}
      {list}
    </motion.div>
  );
};

export default Content;