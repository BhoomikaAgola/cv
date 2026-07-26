import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { GoTo } from "../../icons/icon";
import { ProjectsData } from "../../Data/data";

const RecentWork = () => {
  const images = ProjectsData.map((item) => item.imageId);
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOpen = (index) => {
    setCurrentIndex(index);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  return (
    <Container id="recentWork" fluid className=" section-spacing">
      <div className="section-heading text-center" data-aos="fade-down" data-aos-delay="200">
        <span className="section-chip">Selected Projects</span>
        <h2 className="section-title">
          Work That Balances Visual Quality and Usability
        </h2>
        <p className="section-copy mx-auto">
          A mix of dashboards, portals, and marketing websites built for real
          users, brands, and business goals.
        </p>
      </div>
      <Container className="py-5">
        <div className="row">
          {ProjectsData.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-12 p-3"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <div className="position-relative recent-work project-card">
                <div className="project-card-top">
                  <span className="project-tech">{item.technology}</span>
                </div>
                <img
                  onClick={() => handleOpen(index)}
                  src={item.imageId}
                  alt={item.siteName}
                  className="img-fluid rounded-4 project-image-fill"
                />
                <div className="position-absolute recent-work-data py-3 px-4">
                  <div className="w-100">
                    <div className="d-flex align-items-center">
                      <div className="flex-100">
                        <div className="fs-5 fw-semibold">
                          <a
                            href={item.siteUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-decoration-none "
                          >
                            <span className="me-1">{item.siteName}</span> {GoTo}
                          </a>
                        </div>
                        <div className="project-card-label">{item.category}</div>
                        <div className="project-actions-row mt-3">
                          <button
                            type="button"
                            className="project-read-more"
                            onClick={() => handleOpen(index)}
                          >
                            View details
                          </button>
                          {item.externalLink && (
                            <a
                              href={item.externalLink}
                              target="_blank"
                              rel="noreferrer"
                              className="project-video-link text-decoration-none"
                            >
                              Webapp Video {GoTo}
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="ms-auto">{item.techIcon}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div
          className="text-center pt-5"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <a href="#" className="btn btn-lg px-5 btn-outline-primary">
            Show More
          </a>
        </div> */}
      </Container>

      {/* Gallery Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        fullscreen
        className="image-gallery-modal"
      >
        <Modal.Body className="p-0 position-relative text-center bg-tranparent d-flex align-items-center overflow-visible project-modal-body">
          <button
            type="button"
            onClick={handleClose}
            className="project-modal-close position-fixed top-0 end-0 m-3"
            aria-label="Close project details"
          >
            <span aria-hidden="true">&times;</span>
          </button>

          <div className="d-flex align-items-center justify-content-center w-100">
            <div className="project-modal-content">
              <div className="project-modal-visual">
                <img
                  src={images[currentIndex]}
                  alt={`Project ${currentIndex}`}
                  className="w-100 modal-project-image"
                />
              </div>
              <div className="project-modal-copy">
                <div className="project-modal-chip">
                  {ProjectsData[currentIndex].category}
                </div>
                <h3 className="project-modal-title">
                  {ProjectsData[currentIndex].siteName}
                </h3>
                <p className="project-modal-summary">
                  {ProjectsData[currentIndex].summary}
                </p>
                <div className="project-modal-meta">
                  <span className="project-modal-meta-label">Built with</span>
                  <div className="project-modal-tech">
                    {ProjectsData[currentIndex].technology}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prev Button */}
          <button
            className="btn nav-btn nav-prev-btn position-fixed top-50 translate-middle-y"
            onClick={handlePrev}
          >
            &#8249;
          </button>

          {/* Next Button */}
          <button
            className="btn nav-btn nav-next-btn position-fixed top-50 translate-middle-y"
            onClick={handleNext}
          >
            &#8250;
          </button>

          {/* Website Link */}
          <div className="position-fixed bottom-0 start-50 translate-middle-x mb-4 z-2 d-flex gap-3 flex-wrap justify-content-center">
            {ProjectsData[currentIndex].externalLink && (
              <a
                href={ProjectsData[currentIndex].externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary px-4"
              >
                Watch Video
              </a>
            )}
            <a
              href={ProjectsData[currentIndex].siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-4"
            >
              <span className="me-2">Visit Website</span>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default RecentWork;


