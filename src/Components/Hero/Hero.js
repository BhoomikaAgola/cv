import React from "react";
import { Container } from "react-bootstrap";
import { Images } from "../../images";
import { CvPDF } from "../../images/images";
import { HI } from "../../icons/icon";
import Counter from "../UI/Counter";

const Hero = () => {
  return (
    <Container fluid className="hero-section">
      <Container className="py-3 position-relative">
        <div className="bg-hi">{HI}</div>
        <div className="row align-items-center hero-grid">
          <div className="col-lg-6 col-12 d-flex flex-column gap-4 justify-content-center">
            <div>
              <div
                className="hero-chip"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                Frontend Developer / UI-Focused Builder
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="hero-kicker">Hello, I&apos;m</div>
              <h1 className="hero-title">
                Bhoomika <span>Agola</span>
              </h1>
            </div>
            <div
              className="hero-subtitle"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              Frontend developer crafting refined websites and product
              interfaces that feel clear, modern, and easy to use.
            </div>
            <p className="hero-copy" data-aos="fade-up" data-aos-delay="600">
              I combine visual design thinking with frontend execution to turn
              complex ideas into polished experiences. My focus is on building
              interfaces that not only look strong, but also support real user
              goals with clarity and consistency.
            </p>
            <div
              className="hero-actions d-flex flex-wrap gap-3"
              data-aos="fade-up"
              data-aos-delay="750"
            >
              <a
                href={CvPDF}
                target="_blank"
                title="Open PDF"
                rel="noreferrer"
                className="btn btn-lg btn-primary px-lg-5 px-4"
              >
                Download CV
              </a>
              <a
                href="#recentWork"
                className="btn btn-lg btn-outline-primary px-4"
              >
                View Projects
              </a>
            </div>
            <div
              className="hero-mini-grid"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div className="hero-mini-card">
                <span className="hero-mini-label">Focus</span>
                <strong>Dashboards, portals, and conversion-focused websites</strong>
              </div>
              <div className="hero-mini-card">
                <span className="hero-mini-label">Stack</span>
                <strong>React, Next.js, WordPress, Ant Design, SCSS</strong>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="d-flex justify-content-center py-5">
              <div className="profile-frame" data-aos="zoom-in" data-aos-delay="350">
                <div className="profile-badge profile-badge-top">
                  5+ years crafting interfaces
                </div>
                <img
                  src={Images.Bhumika}
                  alt="Bhumika"
                  className="img-fluid rounded-5 border border-2 border-primary transform-5deg no-transform-on-hover box-shadow-light bg-body-dark profile-image"
                />
                <div className="profile-badge profile-badge-bottom">
                  Available for impactful product work
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-highlight row align-items-center justify-content-center rounded-4 mt-5 text-shadow">
          <div className="col-lg-4 col-md-6 col-12 py-3">
            <div className="row align-items-center justify-content-center stat-item">
              <Counter targetNumber={5} speed={300} />
              <div className="col-8 fs-3 ps-3 lh-sm">
                Years of
                <br />
                Experience
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 py-3">
            <div className="row align-items-center justify-content-center stat-item">
              <Counter targetNumber={25} speed={100} />
              <div className="col-8 fs-3 ps-3 lh-sm">
                Projects
                <br />
                Completed
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 py-3">
            <div className="row align-items-center justify-content-center stat-item">
              <Counter targetNumber={5} speed={200} />
              <div className="col-8 fs-3 ps-3 lh-sm">
                Different
                <br />
                Technologies
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Hero;


