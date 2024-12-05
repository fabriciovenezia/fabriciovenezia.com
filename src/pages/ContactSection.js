import React from "react";
import { useTranslation } from "react-i18next";

import AnimatedSection from "../components/AnimatedSection";
import "../styles/ContactSection.css";

const ContactSection = () => {
  const { t } = useTranslation();

  const renderContactInfo = section => {
    const data = t(`contact.${section}`, { returnObjects: true });
    const titles = t("contact.titles", { returnObjects: true });

    return (
      <AnimatedSection className="contact-section">
        <h3>{data.title}</h3>
        <div className="contact-links">
          <a
            href={`mailto:${data.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.email} - {titles.email}
          </a>
          <a
            href={`https://${data.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.website} - {titles.website}
          </a>
          <a
            href={`https://www.instagram.com/${data.instagram.slice(1)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.instagram} - {titles.instagram}
          </a>
          {section === "personal" ? (
            <a
              href={`https://wa.me/${data.whatsapp.replace(/\s+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.whatsapp} - {titles.whatsapp}
            </a>
          ) : (
            <a
              href={`tel:${data.phone.replace(/\s+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.phone} - {titles.phone}
            </a>
          )}
        </div>
      </AnimatedSection>
    );
  };

  return (
    <div className="content-text">
      {renderContactInfo("personal")}
      {renderContactInfo("clinic")}
    </div>
  );
};

export default ContactSection;