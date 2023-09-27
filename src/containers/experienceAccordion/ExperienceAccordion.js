import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => {
          return section["experiences"].map((experience, index) => (
            <ExperienceCard
              key={index} // Assurez-vous d'utiliser une clé unique pour chaque composant
              index={index}
              totalCards={section["experiences"].length}
              experience={experience}
              theme={theme}
            />
          ));
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
