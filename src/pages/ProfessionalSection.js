import React from "react";
import { useTranslation } from "react-i18next";
import AnimatedSection from "../components/AnimatedSection";
import "../styles/ProfessionalSection.css";

const ProfessionalSection = () => {
	const { t } = useTranslation();
	const professional = t("professional", { returnObjects: true }) || {};
	const { intro, positions = [], achievements = [] } = professional;

	return (
		<div className="content-text">
			{intro && (
				<AnimatedSection>
					<p className="professional-intro">{intro}</p>
				</AnimatedSection>
			)}

			<AnimatedSection className="positions">
				{positions.map((position, index) => (
					<div key={index} className="position-item">
						<div className="position-header">
							<h3>{position.title}</h3>
							<span className="workplace">{position.workplace}</span>
							<span className="period">{position.period}</span>
						</div>
						<p className="description">{position.description}</p>
					</div>
				))}
			</AnimatedSection>

			{achievements.length > 0 && (
				<AnimatedSection className="achievements">
					<h3>{t("professional.achievementsTitle", "Key Achievements")}</h3>
					<ul>
						{achievements.map((achievement, index) => (
							<li key={index}>{achievement}</li>
						))}
					</ul>
				</AnimatedSection>
			)}
		</div>
	);
};

export default ProfessionalSection;
