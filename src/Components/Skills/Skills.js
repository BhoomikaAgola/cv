import React from "react";
import { Container } from "react-bootstrap";
import { Skillset1, Skillset2 } from "../../Data/data";

const Skills = () => {
  return (
    <Container
      id="skills"
      fluid
      className="bg-secondary-subtle  section-spacing"
    >
      <div
        className="section-heading text-center"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <span className="section-chip">Capabilities</span>
        <h2 className="section-title">Tools I Use to Shape Modern Interfaces</h2>
        <p className="section-copy mx-auto">
          From frontend frameworks to visual design tools, this is the stack I
          rely on to move from concept to polished delivery.
        </p>
      </div>
      <Container className="py-5">
        <div className="skills-group" data-aos="fade-up" data-aos-delay="250">
          <div className="skills-group-head">
            <h3>Frontend Platforms</h3>
            <p>Production tools for interactive, component-driven experiences.</p>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-4 pb-5 flex-wrap">
          {Skillset1.map((item, index) => (
            <div key={index} className="skill-type text-center">
              <div className="rounded-4 skill-icon bg-skills p-3">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className="flex-grow-1 d-flex"
                >
                  {item.techIcon}
                </div>
                {/* <div className="fs-5 text-primary fw-medium" data-aos="zoom-in" data-aos-delay="300">
                80<small>%</small>
              </div> */}
              </div>
              <div className="py-3" data-aos="zoom-in" data-aos-delay="300">
                {item.techName}
              </div>
            </div>
          ))}
        </div>
        <div className="skills-group" data-aos="fade-up" data-aos-delay="250">
          <div className="skills-group-head">
            <h3>Design & Styling</h3>
            <p>Systems and libraries that help create consistent, polished UI.</p>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-4 pb-5 flex-wrap">
          {Skillset2.map((item, index) => (
            <div key={index} className="skill-type text-center">
              <div className="rounded-4 skill-icon bg-skills p-3">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className="flex-grow-1 d-flex"
                >
                  {item.techIcon}
                </div>
                {/* <div
                className="fs-5 text-primary fw-medium"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                90%
              </div> */}
              </div>
              <div className="py-3" data-aos="zoom-in" data-aos-delay="300">
                {item.techName}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default Skills;
