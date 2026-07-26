import React from "react";
import { Container } from "react-bootstrap";
import { FooterLogo } from "../../icons/icon";

const Footer = () => {
  return (
    <Container id="contact" fluid className="py-3">
      <Container className="py-5">
        <div className="footer-panel">
          <div className="text-center footer-content">
            <div className="footer-logo-wrap">{FooterLogo}</div>
            <span className="section-chip">Let&apos;s Connect</span>
            <h2 className="footer-title">
              Looking for a frontend partner who cares about both polish and usability?
            </h2>
            <p className="footer-copy">
              I design and build interfaces that feel considered from first
              impression to final interaction, with attention to clarity,
              responsiveness, and visual quality.
            </p>
            <div className="footer-actions">
              <a
                href="mailto:bhoomikaagola@gmail.com"
                className="btn btn-primary px-4"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/bhoomikaagola/"
                className="btn btn-outline-primary px-4"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="fs-5 py-4 footer-nav">
              <a href="#" className="text-decoration-none menu-name px-3">
                <span>Home</span>
              </a>
              <a
                href="#experience"
                className="text-decoration-none menu-name px-3"
              >
                <span>Experience</span>
              </a>
              <a
                href="#recentWork"
                className="text-decoration-none menu-name px-3"
              >
                <span>Portfolio</span>
              </a>
              <a
                href="#skills"
                className="text-decoration-none menu-name px-3"
              >
                <span>Skills</span>
              </a>
            </div>
            <div className="footer-note">Designed and developed by Bhoomika Agola</div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
