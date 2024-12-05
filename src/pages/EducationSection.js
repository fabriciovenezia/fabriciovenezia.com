import React from "react";
import { useTranslation } from "react-i18next";
import AnimatedSection from "../components/AnimatedSection";
import "../styles/EducationSection.css";

const EducationSection = () => {
	const { t } = useTranslation();
	const { degrees, continuousEducation } = t("education", {
		returnObjects: true,
	});

	return (
		<div className="content-text">
			<AnimatedSection className="formal-education">
				{degrees.map((degree, index) => (
					<div key={index} className="degree-item">
						<span className="year">{degree.year}</span> - {degree.title}
						{degree.institution && (
							<span className="institution">, {degree.institution}</span>
						)}
					</div>
				))}
			</AnimatedSection>

			<AnimatedSection className="continuous-education">
				<h3>{t("education.continuousEducationTitle")}</h3>
				<ul>
					{continuousEducation.map((course, index) => (
						<li key={index}>{course}</li>
					))}
				</ul>
			</AnimatedSection>
		</div>
	);
};

export default EducationSection;
