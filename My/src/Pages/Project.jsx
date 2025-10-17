import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import { usePortfolioEffects } from "./usePortfolioEffects";
import emailjs from "@emailjs/browser";

// Import images
import banner01 from "../assets/banner-01.jpg";

// Project images
import vocalGuardImg from "../assets/VocalGuard.png";
import sabraMusicImg from "../assets/Sabramusic.png";
import studentPortalImg from "../assets/student portal.png";
import truthiFyImg from "../assets/TrutiFy.png";
import healLinkImg from "../assets/HealLink.png";
import sltbTransitImg from "../assets/SLTB-TransitEase.png";

// Import SVG logos for technologies
import htmlLogo from "../assets/HTML.svg";
import cssLogo from "../assets/CSS.svg";
import jsLogo from "../assets/JavaScript.svg";
import bootstrapLogo from "../assets/Bootstrap.svg";
import phpLogo from "../assets/PHP-Light.svg";
import pythonLogo from "../assets/Python-Light.svg";
import reactLogo from "../assets/React-Dark.svg";

// Framework and Library logos
import laravelLogo from "../assets/Laravel-Dark.svg";
import fastApiLogo from "../assets/FastAPI.svg";
import nodejsLogo from "../assets/NodeJS-Dark.svg";
import expressjsLogo from "../assets/ExpressJS-Dark.svg";
import tailwindLogo from "../assets/TailwindCSS-Dark.svg";

// Database logos
import mongodbLogo from "../assets/MongoDB.svg";
import mysqlLogo from "../assets/MySQL-Dark.svg";
import firebaseLogo from "../assets/Firebase-Dark.svg";

// Design Tool logos
import figmaLogo from "../assets/Figma-Dark.svg";
import photoshopLogo from "../assets/Photoshop.svg";
import illustratorLogo from "../assets/Illustrator.svg";
import canva from "../assets/canva.png";

// Other Tool logos
import gitLogo from "../assets/Git.svg";
import githubLogo from "../assets/Github-Light.svg";
import vscodeLogo from "../assets/VSCode-Dark.svg";
import dockerLogo from "../assets/Docker.svg";
import postmanLogo from "../assets/Postman.svg";

export default function Project() {
  // Contact form states
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Use custom hook for portfolio effects
  usePortfolioEffects();
  useEffect(() => {
    // Contact form email function
    const sendEmail = (e) => {
      e.preventDefault();
      setIsLoading(true);
      setMessage("");

      // EmailJS configuration
      const serviceID = "service_gpm5t3g"; // Your service ID
      const templateID = "template_3ttpcw2"; // Your template ID
      const publicKey = "l3gHoMfIajcedQeSl"; // Your public key

      emailjs
        .sendForm(serviceID, templateID, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setMessage("Message sent successfully! I'll get back to you soon.");
            setIsLoading(false);
            form.current.reset(); // Clear the form
          },
          (error) => {
            console.log("FAILED...", error.text);
            setMessage(
              "Failed to send message. Please try again or contact me directly."
            );
            setIsLoading(false);
          }
        );
    }; // Add event listener to contact form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", sendEmail);
    }

    // Initialize external scripts (CSS is now preloaded in HTML)
    const initializeExternalScripts = () => {
      // Initialize AOS if available
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          offset: 50,
        });
      } else {
        // Fallback: load AOS if not already loaded
        const aosScript = document.createElement("script");
        aosScript.src = "https://unpkg.com/aos@next/dist/aos.js";
        aosScript.onload = () => {
          if (window.AOS) {
            window.AOS.init({
              duration: 1000,
              offset: 50,
            });
          }
        };
        document.body.appendChild(aosScript);
      }
    }; // Initialize scripts after a short delay to ensure DOM is ready
    setTimeout(initializeExternalScripts, 100);

    // Enhanced Back to top button functionality
    const handleBackToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleScroll = () => {
      const backToTopBtn = document.getElementById("btn-back-to-top");
      if (backToTopBtn) {
        if (window.pageYOffset > 300) {
          backToTopBtn.classList.add("show");
          // Add pulse effect when user scrolls down significantly
          if (window.pageYOffset > 800) {
            backToTopBtn.classList.add("pulse");
          }
        } else {
          backToTopBtn.classList.remove("show", "pulse");
        }
      }
    };

    const backToTopBtn = document.getElementById("btn-back-to-top");
    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", handleBackToTop);
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll); // Initial check
    handleScroll(); // Cleanup function
    return () => {
      if (backToTopBtn) {
        backToTopBtn.removeEventListener("click", handleBackToTop);
      }
      window.removeEventListener("scroll", handleScroll);

      // Remove contact form event listener
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.removeEventListener("submit", sendEmail);
      }
    };
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav
        id="navbar-top"
        className="navbar navbar-expand-lg navbar-light  sticky-top"
      >
        <div className="container-fluid px-5">
          {" "}
          <a className="navbar-brand fw-bold fs-2" href="#">
            Portfolio
          </a>
          <button
            className="nav-menu d-md-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <i className="bi bi-menu-button-fill"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-4" style={{ fontSize: "1.1rem" }}>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Skills
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#portfolio">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button className="c-btn  ">
            <a
              href="21CIS0008_Piumal.pdf"
              download="Piumal_CV"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Download CV
            </a>
          </button>
        </div>
      </nav>
      {/* Home Section */}
      <section className="home pt-3  pb-5" id="home">
        <div className="container">
          <div className="row justify-content-evenly align-middle">
            <div
              className="new col-10 col-md-6 text-center text-md-start"
              data-aos="slide-right"
            >
              {" "}
              <h2 className="mt-4  ">
                <span className="h">Hello! I Am</span> <br />
                <span className="c-orange">Piumal Harshana</span>
              </h2>
              <span className="one">And I'm A</span>{" "}
              <span className="two"> Full-Stack Developer</span>
              <br /> <br />{" "}
              <p className="text2">
                I’m a passionate developer who loves turning ideas into
                interactive, user-friendly digital experiences. I focus on
                building creative and functional solutions that combine design,
                usability, and performance.
              </p>{" "}
              <button className="h-btn  ">
                <a href="#contact">Hire Me</a>
              </button>{" "}
              {/* Social Buttons */}
              <div className="social-buttons mt-3">
                <a
                  href="https://github.com/piumalhk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn github-btn"
                  title="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://linkedin.com/in/piumal-harshana-71b968302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn linkedin-btn"
                  title="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>{" "}
            <div
              className="col-10 col-md-4 d-none d-md-block "
              data-aos="slide-left"
            >
              <div className="profile-frame">
                <div className="profile-inner">
                  <img
                    src={banner01}
                    className="img-fluid profile-image"
                    alt="Banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Expertise Section */}
      <section className="expertise mt-5" id="service">
        <div className="container">
          <small className="about">ABOUT ME</small>

          <div className="row justify-content-evenly mt-5">
            <div className=" " data-aos="fade-up">
              <div className="service-card">
                <div className="content mt-3">
                  <p className="text-muted">
                    I am an undergraduate at Sabaragamuwa University of Sri
                    Lanka, studying in the Faculty of Computing, Department of
                    Computing and Information Systems.I am an enthusiastic and
                    dedicated individual eager to embark on a rewarding journey
                    as a Trainee. With a strong passion for learning and a
                    commitment to excellence, I am excited about the opportunity
                    to contribute to your team. I believe that my proactive
                    attitude and willingness to embrace challenges will allow me
                    to grow and thrive in this role, while also adding value to
                    your organization. I look forward to the possibility of
                    working together and making a positive impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Skills Section */}
      <section className="skill mt-5 py-5" id="about">
        <div className="container">
          <div className="heading text-center mb-5">
            <small className="text">My Expertise</small>
            <h3 className="text-white">Technical Skills & Tools</h3>
          </div>{" "}
          {/* Web Technologies */}
          <div className="skill-category mb-5" data-aos="fade-up">
            <h4 className="category-title  mb-4">
              <i className="bi bi-code-slash me-2"></i>Web Technologies
            </h4>
            <div className="row justify-content-center">
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src={htmlLogo} alt="HTML5" className="skill-logo" />
                  </div>
                  <span>HTML5</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src={cssLogo} alt="CSS3" className="skill-logo" />
                  </div>
                  <span>CSS3</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src={jsLogo} alt="JavaScript" className="skill-logo" />
                  </div>
                  <span>JavaScript</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src={pythonLogo} alt="Python" className="skill-logo" />
                  </div>
                  <span>Python</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src={phpLogo} alt="PHP" className="skill-logo" />
                  </div>
                  <span>PHP</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img
                      src={bootstrapLogo}
                      alt="Bootstrap"
                      className="skill-logo"
                    />
                  </div>
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
          {/* Frameworks & Libraries */}
          <div
            className="skill-category mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h4 className="category-title  mb-4">
              <i className="bi bi-layers me-2"></i>Frameworks & Libraries
            </h4>
            <div className="row justify-content-center">
              {" "}
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img
                      src={reactLogo}
                      alt="React.js"
                      className="skill-logo"
                    />
                  </div>
                  <span>React.js</span>
                </div>
              </div>{" "}
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img
                      src={laravelLogo}
                      alt="Laravel"
                      className="skill-logo"
                    />
                  </div>
                  <span>Laravel</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img
                      src={fastApiLogo}
                      alt="FastAPI"
                      className="skill-logo"
                    />
                  </div>
                  <span>Fast API</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img
                      src={nodejsLogo}
                      alt="Node.js"
                      className="skill-logo"
                    />
                  </div>
                  <span>Node.js</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img
                      src={expressjsLogo}
                      alt="Express.js"
                      className="skill-logo"
                    />
                  </div>
                  <span>Express.js</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img
                      src={tailwindLogo}
                      alt="Tailwind CSS"
                      className="skill-logo"
                    />
                  </div>
                  <span>Tailwind</span>
                </div>
              </div>
            </div>
          </div>
          {/* Databases */}
          <div
            className="skill-category mb-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="category-title  mb-4">
              <i className="bi bi-database me-2"></i>Databases
            </h4>
            <div className="row justify-content-center">
              {" "}
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img
                      src={mongodbLogo}
                      alt="MongoDB"
                      className="skill-logo"
                    />
                  </div>
                  <span>MongoDB</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src={mysqlLogo} alt="MySQL" className="skill-logo" />
                  </div>
                  <span>MySQL</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img
                      src={firebaseLogo}
                      alt="Firebase"
                      className="skill-logo"
                    />
                  </div>
                  <span>Firebase</span>
                </div>
              </div>
            </div>
          </div>
          {/* Design Tools */}
          <div
            className="skill-category mb-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="category-title  mb-4">
              <i className="bi bi-palette me-2"></i>Design Tools
            </h4>
            <div className="row justify-content-center">
              {" "}
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src={figmaLogo} alt="Figma" className="skill-logo" />
                  </div>
                  <span>Figma</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img
                      src={photoshopLogo}
                      alt="Photoshop"
                      className="skill-logo"
                    />
                  </div>
                  <span>Photoshop</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img
                      src={illustratorLogo}
                      alt="Illustrator"
                      className="skill-logo"
                    />
                  </div>
                  <span>Illustrator</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src={canva} alt="Canva" className="skill-logo" />
                  </div>
                  <span>Canva</span>
                </div>
              </div>
            </div>
          </div>
          {/* Other Tools */}
          <div
            className="skill-category mb-5"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h4 className="category-title  mb-4">
              <i className="bi bi-tools me-2"></i>Other Tools
            </h4>
            <div className="row justify-content-center">
              {" "}
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src={gitLogo} alt="Git" className="skill-logo" />
                  </div>
                  <span>Git</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src={githubLogo} alt="GitHub" className="skill-logo" />
                  </div>
                  <span>GitHub</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img
                      src={vscodeLogo}
                      alt="VS Code"
                      className="skill-logo"
                    />
                  </div>
                  <span>VS Code</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img src={dockerLogo} alt="Docker" className="skill-logo" />
                  </div>
                  <span>Docker</span>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-4 mb-3">
                <div className="skill-item">
                  <div className="skill-icon">
                    <img
                      src={postmanLogo}
                      alt="Postman"
                      className="skill-logo"
                    />
                  </div>
                  <span>Postman</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="heading text-center pt-2">
            <small>Creative Work</small>
            <h3>Check My Latest Projects</h3>
          </div>

          <div className="portfolio-body ">
            <div className="row justify-content-center g-4 ">
              {" "}
              <div className="col-lg-4 col-md-6 col-12 " data-aos="fade-up">
                <div className="project-card">
                  <div className="project-image">
                    <img
                      src={vocalGuardImg}
                      className="card-img-top"
                      alt="VocalGuard Project"
                    />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a
                          href="#https://github.com/naveensanjula975/VocalGuard.git"
                          className="github-link"
                          title="View on GitHub"
                        >
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h4 className="project-title">
                      VocalGuard - Deepfake Audio Detection System
                    </h4>
                    <p className="project-description">
                      VocalGuard is an AI-powered web application for detecting
                      audio deepfakes. Using advanced Transformer models, it
                      analyzes uploaded audio files to identify manipulation
                      with high accuracy.
                    </p>
                    <div className="project-tech">
                      <span className="tech-tag">React.js</span>
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">Firebase</span>
                      <span className="tech-tag">Firestore</span>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up">
                <div className="project-card">
                  <div className="project-image">
                    <img
                      src={sabraMusicImg}
                      className="card-img-top"
                      alt="Sabra Music Project"
                    />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a
                          href="#https://github.com/Piumalhk/Sabra-Music.git"
                          className="github-link"
                          title="View on GitHub"
                        >
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h4 className="project-title">
                      Sabra Music - University Art Center Booking System
                    </h4>
                    <p className="project-description">
                      The Art Center Booking System is a web app for
                      Sabaragamuwa University that lets students book practice
                      slots online, check availability, and upload approval
                      letters.
                    </p>
                    <div className="project-tech">
                      <span className="tech-tag">HTML</span>
                      <span className="tech-tag">CSS</span>
                      <span className="tech-tag">Laravel</span>
                      <span className="tech-tag">PHP</span>
                      <span className="tech-tag">MySQL</span>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up">
                <div className="project-card">
                  <div className="project-image">
                    <img
                      src={studentPortalImg}
                      className="card-img-top"
                      alt="Student Portal Project"
                    />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a
                          href="https://github.com/Piumalhk/Student-Portal.git"
                          className="github-link"
                          title="View on GitHub"
                        >
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h4 className="project-title">Student Portal</h4>
                    <p className="project-description">
                      A modern full-stack web application that serves as a
                      comprehensive student portal system with separate admin
                      and user interfaces for feedback and announcements.
                    </p>
                    <div className="project-tech">
                      <span className="tech-tag">React.js</span>
                      <span className="tech-tag">Node.js</span>
                      <span className="tech-tag">Express.js</span>
                      <span className="tech-tag">MongoDB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="row justify-content-center g-4 mt-4">
              {" "}
              <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up">
                <div className="project-card">
                  <div className="project-image">
                    <img
                      src={truthiFyImg}
                      className="card-img-top"
                      alt="TruthiFy Project"
                    />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a
                          href="https://github.com/Piumalhk/TruthiFy.git"
                          className="github-link"
                          title="View on GitHub"
                        >
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h4 className="project-title">
                      TruthiFy - Fake News Detection Web Application
                    </h4>
                    <p className="project-description">
                      A Fake News Detection Web App with FastAPI backend and
                      React frontend, using pre-trained transformer models to
                      classify news articles as real or fake with instant
                      predictions.
                    </p>
                    <div className="project-tech">
                      <span className="tech-tag">React.js</span>
                      <span className="tech-tag">FastAPI</span>
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">MongoDB</span>
                      <span className="tech-tag">Tailwind CSS</span>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up">
                <div className="project-card">
                  <div className="project-image">
                    <img
                      src={healLinkImg}
                      className="card-img-top"
                      alt="HealLink Project"
                    />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a
                          href="#https://github.com/nadunthilina/HealLink.git"
                          className="github-link"
                          title="View on GitHub"
                        >
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h4 className="project-title">
                      HealLink - Caretaker Management System
                    </h4>{" "}
                    <p className="project-description">
                      A web-based solution for nursing services to automate
                      caretaker scheduling, store digital records, and enable
                      smooth communication among all stakeholders.
                    </p>
                    <div className="project-tech">
                      <span className="tech-tag">React.js</span>
                      <span className="tech-tag">Node.js</span>
                      <span className="tech-tag">Express.js</span>
                      <span className="tech-tag">MongoDB</span>
                      <span className="tech-tag">Tailwind CSS</span>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up">
                <div className="project-card">
                  <div className="project-image">
                    <img
                      src={sltbTransitImg}
                      className="card-img-top"
                      alt="SLTB-TransitEase Project"
                    />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a
                          href="https://github.com/Piumalhk/SLTB-TransitEase.git"
                          className="github-link"
                          title="View on GitHub"
                        >
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h4 className="project-title">SLTB-TransitEase</h4>
                    <p className="project-description">
                      A web application designed to streamline the public
                      transportation experience in Sri Lanka. It provides
                      real-time bus tracking, route planning, and digital
                      ticketing features.
                    </p>
                    <div className="project-tech">
                      <span className="tech-tag">HTML</span>
                      <span className="tech-tag">CSS</span>
                      <span className="tech-tag">PHP</span>
                      <span className="tech-tag">JavaScript</span>
                      <span className="tech-tag">MySQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>{" "}
      {/* Contact Section */}
      <section className="contact py-5" id="contact">
        <div className="container">
          <div className="heading text-center">
            <small>Get in Touch</small>
            <h3>Any Questions? Feel Free to Contact</h3>
          </div>
          <div className="row justify-content-evenly mt-5">
            <div
              className="col-md-5 col-10 contact-details"
              data-aos="slide-right"
            >
              <div className="row justify-content-evenly">
                <div className="col-1">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="col-11">
                  <p>Colombo, Sri Lanka</p>
                </div>
              </div>
              <div className="row justify-content-evenly">
                <div className="col-1">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="col-11">
                  <p>+94 786322400</p>
                </div>
              </div>
              <div className="row justify-content-evenly">
                <div className="col-1">
                  <i className="bi bi-send-fill"></i>
                </div>
                <div className="col-11">
                  <p>piumal.bcc@gmail.com</p>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-5 col-10 mt-3 mt-md-0" data-aos="slide-left">
              <div className="contact-form">
                <form ref={form} id="contact-form">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="user_name"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="user_email"
                      className="form-control"
                      placeholder="E-mail"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="user_phone"
                      className="form-control"
                      placeholder="Mobile No."
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Message"
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  {message && (
                    <div
                      className={`alert ${
                        message.includes("successfully")
                          ? "alert-success"
                          : "alert-danger"
                      } mb-3`}
                    >
                      {message}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="c-btn h-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending...
                      </>
                    ) : (
                      "Send"
                    )}
                  </button>
                </form>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
      {/* Back to Top Button */}
      <button
        type="button"
        className="btn btn-floating btn-lg rounded-pill"
        id="btn-back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>{" "}
      {/* Professional Footer */}
      <footer className="professional-footer">
        <div className="container">
          <div className="row g-4">
            {/* About Section */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="footer-about">
                <h4 className="footer-title">Piumal Harshana</h4>
                <p className="footer-description">
                  Full-Stack Developer passionate about creating innovative web
                  solutions. Specializing in React, Node.js, and modern web
                  technologies to build exceptional digital experiences.
                </p>
                <div className="footer-contact">
                  <div className="contact-item">
                    <i className="bi bi-envelope"></i>
                    <span>piumal.bcc@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-phone"></i>
                    <span>+94 786322400</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>Colombo, Sri Lanka</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div
              className="col-lg-2 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="footer-links">
                <h5 className="footer-section-title">Quick Links</h5>
                <ul className="footer-link-list">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#service">About</a>
                  </li>
                  <li>
                    <a href="#about">Skills</a>
                  </li>
                  <li>
                    <a href="#portfolio">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services */}
            <div
              className="col-lg-3 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="footer-links">
                <h5 className="footer-section-title">Services</h5>
                <ul className="footer-link-list">
                  <li>
                    <a href="#portfolio">Web Development</a>
                  </li>
                  <li>
                    <a href="#portfolio">Frontend Development</a>
                  </li>
                  <li>
                    <a href="#portfolio">Backend Development</a>
                  </li>
                  <li>
                    <a href="#portfolio">Full-Stack Solutions</a>
                  </li>
                  <li>
                    <a href="#portfolio">UI/UX Design</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media & Newsletter */}
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="footer-social">
                <h5 className="footer-section-title">Connect With Me</h5>
                <p className="social-description">
                  Follow me on social media for updates and latest projects.
                </p>
                <div className="footer-social-links">
                  <a
                    href="https://github.com/piumalhk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn github"
                    title="GitHub"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/piumal-harshana-71b968302"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn linkedin"
                    title="LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                    href="mailto:piumal.bcc@gmail.com"
                    className="footer-social-btn email"
                    title="Email"
                  >
                    <i className="bi bi-envelope"></i>
                  </a>
                  <a
                    href="tel:+94786322400"
                    className="footer-social-btn phone"
                    title="Phone"
                  >
                    <i className="bi bi-phone"></i>
                  </a>
                </div>

                {/* Newsletter */}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="footer-copyright">
                  &copy; 2025{" "}
                  <span className="brand-name">Piumal Harshana</span>. All
                  Rights Reserved.
                </p>
              </div>
              <div className="col-md-6">
                <div className="footer-bottom-links">
                  <a href="#privacy">Privacy Policy</a>
                  <a href="#terms">Terms of Service</a>
                  <a href="#sitemap">Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
