import React from "react";
import { Container } from "react-bootstrap";
import { FlyIcon, MeditationIcon } from "../../icons/icon";
import { experienceData } from "../../Data/data";

const Experience = () => {
  return (
    <Container fluid className="bg-secondary-subtle mt--85 section-spacing">
      <div id="experience" className="p-4"></div>
      <Container>
        <div
          className="section-heading text-center"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <span className="section-chip">Career Journey</span>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-copy mx-auto">
            A blend of hands-on product work, design execution, and frontend
            development across agency and in-house teams.
          </p>
        </div>
        <div className="text-center" data-aos="fade-down" data-aos-delay="300">
          {FlyIcon}
        </div>
        <div className="row flex-column experience-row">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="experience-child col-12 col-md-6 pt-md-0 pt-5"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <div className="bg-experience p-4 rounded-4 position-relative z-1 experience-card">
                <div className="experience-card-top">
                  <div className="fs-6 text-primary fw-medium experience-pill">
                    {item.experienceTimeline}
                  </div>
                  <div className="experience-index">0{index + 1}</div>
                </div>
                <div className="fs-2 fw-medium">{item.position}</div>
                <div className="fs-5 experience-company">{item.companyName}</div>
                <p className="experience-highlight-copy mb-0">{item.highlight}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="text-center pt-md-0 pt-5 experience-start-icon-dec"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          {MeditationIcon}
        </div>
      </Container>
    </Container>
  );
};

export default Experience;
