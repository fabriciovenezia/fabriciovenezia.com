import React from "react";
import { useTranslation } from "react-i18next";

import AnimatedSection from "../components/AnimatedSection";
import "../styles/ContactSection.css";

const ContactSection = () => {
  const { t } = useTranslation();

  const renderContactInfo = section => {
    const data = t(`contact.${section}`, { returnObjects: true });

    return (
      <AnimatedSection className="contact-section">
        <h3>{data.title}</h3>
        <div className="contact-links">
          <a
            href={`mailto:${data.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.email} - Email
          </a>
          <a
            href={`https://${data.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.website} - Sitio Web
          </a>
          <a
            href={`https://www.instagram.com/${data.instagram.slice(1)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.instagram} - Instagram
          </a>
          {section === "personal" ? (
            <a
              href={`https://wa.me/${data.whatsapp.replace(/\s+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.whatsapp} - WhatsApp
            </a>
          ) : (
            <a
              href={`tel:${data.phone.replace(/\s+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.phone} - Teléfono
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
