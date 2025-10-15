import React, { useEffect, useState } from "react";
import "./index.css";
import { usePortfolioEffects } from "./usePortfolioEffects";

// Import images
import banner01 from "../assets/banner-01.png";
import serviceIcon1 from "../assets/service-icon1.png";
import serviceIcon2 from "../assets/service-icon2.png";
import serviceIcon3 from "../assets/service-icon3.png";
import game2048 from "../assets/2048game.png";
import currencyConverter from "../assets/currency-converter.png";
import dictionary from "../assets/dictionary.png";
import piceditor from "../assets/piceditor.png";
import tictactoe from "../assets/tictactoe.png";
import langTranslator from "../assets/lang-translator.png";
import testimonialsImg from "../assets/tastimonials-img.png";

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
import canva from "../assets/Canva.png";

// Other Tool logos
import gitLogo from "../assets/Git.svg";
import githubLogo from "../assets/Github-Light.svg";
import vscodeLogo from "../assets/VSCode-Dark.svg";
import dockerLogo from "../assets/Docker.svg";
import postmanLogo from "../assets/Postman.svg";

export default function Project() {
  const [htmlProgress, setHtmlProgress] = useState(0);
  const [jsProgress, setJsProgress] = useState(0);
  const [phpProgress, setPhpProgress] = useState(0);
  const [reactProgress, setReactProgress] = useState(0);

  // Use custom hook for portfolio effects
  usePortfolioEffects();

  useEffect(() => {
    // Add external stylesheets and scripts
    const addExternalResources = () => {
      // Bootstrap CSS
      const bootstrapLink = document.createElement("link");
      bootstrapLink.href =
        "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css";
      bootstrapLink.rel = "stylesheet";
      bootstrapLink.integrity =
        "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65";
      bootstrapLink.crossOrigin = "anonymous";
      document.head.appendChild(bootstrapLink);

      // Google Fonts
      const fontLink1 = document.createElement("link");
      fontLink1.rel = "preconnect";
      fontLink1.href = "https://fonts.googleapis.com";
      document.head.appendChild(fontLink1);

      const fontLink2 = document.createElement("link");
      fontLink2.rel = "preconnect";
      fontLink2.href = "https://fonts.gstatic.com";
      fontLink2.crossOrigin = "anonymous";
      document.head.appendChild(fontLink2);

      const fontLink3 = document.createElement("link");
      fontLink3.href =
        "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap";
      fontLink3.rel = "stylesheet";
      document.head.appendChild(fontLink3);

      // Bootstrap Icons
      const bootstrapIcons = document.createElement("link");
      bootstrapIcons.rel = "stylesheet";
      bootstrapIcons.href =
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css";
      document.head.appendChild(bootstrapIcons);

      // AOS CSS
      const aosLink = document.createElement("link");
      aosLink.rel = "stylesheet";
      aosLink.href = "https://unpkg.com/aos@next/dist/aos.css";
      document.head.appendChild(aosLink);

      // jQuery
      const jqueryScript = document.createElement("script");
      jqueryScript.src =
        "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js";
      document.head.appendChild(jqueryScript);

      // Bootstrap JS
      const bootstrapScript = document.createElement("script");
      bootstrapScript.src =
        "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
      bootstrapScript.integrity =
        "sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4";
      bootstrapScript.crossOrigin = "anonymous";
      document.body.appendChild(bootstrapScript);

      // AOS JS
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
    };

    addExternalResources();

    // Progress bar animations
    const htmlTimer = setInterval(() => {
      setHtmlProgress((prev) => {
        if (prev >= 90) {
          clearInterval(htmlTimer);
          return 90;
        }
        return prev + 1;
      });
    }, 30);

    const jsTimer = setInterval(() => {
      setJsProgress((prev) => {
        if (prev >= 75) {
          clearInterval(jsTimer);
          return 75;
        }
        return prev + 1;
      });
    }, 30);

    const phpTimer = setInterval(() => {
      setPhpProgress((prev) => {
        if (prev >= 80) {
          clearInterval(phpTimer);
          return 80;
        }
        return prev + 1;
      });
    }, 30);

    const reactTimer = setInterval(() => {
      setReactProgress((prev) => {
        if (prev >= 85) {
          clearInterval(reactTimer);
          return 85;
        }
        return prev + 1;
      });
    }, 30);

    // Back to top button functionality
    const handleBackToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const backToTopBtn = document.getElementById("btn-back-to-top");
    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", handleBackToTop);
    }

    // Cleanup function
    return () => {
      clearInterval(htmlTimer);
      clearInterval(jsTimer);
      clearInterval(phpTimer);
      clearInterval(reactTimer);
      if (backToTopBtn) {
        backToTopBtn.removeEventListener("click", handleBackToTop);
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
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button className="c-btn  ">
            <a
              href="Entry Level Web Developer Resume.pdf"
              download="Piumal_CV"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Download CV
            </a>
          </button>
        </div>
      </nav>
      {/* Home Section */}
      <section className="home pt-5 pb-5" id="home">
        <div className="container">
          <div className="row justify-content-evenly align-middle">
            <div
              className="col-10 col-md-6 text-center text-md-start"
              data-aos="slide-right"
            >
              <h2 className="mt-5 glow-text">
                <span className="h">Hello! I Am</span> <br />
                <span className="c-orange">Piumal Harshana</span>
              </h2>
              <span className="one">And I'm A</span>{" "}
              <span className="two"> Full-Stack Developer</span>
              <br /> <br />{" "}
              <p className="text">
                having 5 years of experience in expertise of creating website
                with fully responsive Also with backend part too.
              </p>
              <button className="h-btn  ">Hire Me</button>
              <a href="" className="link ms-4 d-none">
                See My Work
              </a>
            </div>{" "}
            <div className="col-10 col-md-4 d-none d-md-block">
              <img
                src={banner01}
                className="img-fluid floating glow-border"
                alt="Banner"
              />
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
            <h4 className="category-title glow-text mb-4">
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
            <h4 className="category-title glow-text mb-4">
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
            <h4 className="category-title glow-text mb-4">
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
            <h4 className="category-title glow-text mb-4">
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
                      <img
                      src={canva}
                      alt="Canva"
                      className="skill-logo"
                    />
                
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
            <h4 className="category-title glow-text mb-4">
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
          <div className="heading text-center pt-5">
            <small>Creative Work</small>
            <h3>Check My Portfolio</h3>
          </div>

          <div id="myBtnContainer" className="text-center mt-4">
            <button className="filter-item" data-filter="all">
              All
            </button>
            <button className="filter-item" data-filter="game">
              Game
            </button>
            <button className="filter-item" data-filter="webapp">
              Web App
            </button>
            <button className="filter-item" data-filter="website">
              Website
            </button>
            <button className="filter-item" data-filter="brand">
              Brand
            </button>
          </div>

          <div className="portfolio-body">
            <div className="row justify-content-evenly px-4">
              <div
                className="post col-md-4 game all col-10 mt-3 mt-md-0"
                data-aos="fade-up"
              >
                <div className="card">
                  <img
                    src={game2048}
                    className="card-img-top"
                    alt="2048 Game"
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">2048 Game</h4>
                    <span className="badge bg-secondary badge-pill">
                      HTML&CSS
                    </span>
                    <span className="badge bg-secondary badge-pill">
                      JavaScript
                    </span>
                    <span className="badge bg-secondary badge-pill mb-2">
                      Game
                    </span>
                    <br />
                    <a href="#" className="link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="post col-md-4 website all col-10 mt-3 mt-md-0"
                data-aos="fade-up"
              >
                <div className="card">
                  <img
                    src={currencyConverter}
                    className="card-img-top"
                    alt="Currency Converter"
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">Converter App</h4>
                    <span className="badge bg-secondary badge-pill">
                      HTML&CSS
                    </span>
                    <span className="badge bg-secondary badge-pill">
                      JavaScript
                    </span>
                    <span className="badge bg-secondary badge-pill mb-2">
                      Website
                    </span>
                    <br />
                    <a href="#" className="read-more-btn link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="post col-md-4 webapp all col-10 mt-3 mt-md-0"
                data-aos="fade-up"
              >
                <div className="card">
                  <img
                    src={dictionary}
                    className="card-img-top"
                    alt="Dictionary"
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">Dictionary</h4>
                    <span className="badge bg-secondary badge-pill">
                      HTML&CSS
                    </span>
                    <span className="badge bg-secondary badge-pill">
                      JavaScript
                    </span>
                    <span className="badge bg-secondary badge-pill mb-2">
                      WebApp
                    </span>
                    <br />
                    <a href="#" className="read-more-btn link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-evenly mt-4 px-4">
              <div
                className="post col-md-4 game all col-10 mt-3 mt-md-0"
                data-aos="fade-up"
              >
                <div className="card">
                  <img
                    src={piceditor}
                    className="card-img-top"
                    alt="Pic Editor"
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">PicEditor App</h4>
                    <span className="badge bg-secondary badge-pill">
                      HTML&CSS
                    </span>
                    <span className="badge bg-secondary badge-pill">
                      JavaScript
                    </span>
                    <span className="badge bg-secondary badge-pill mb-2">
                      App
                    </span>
                    <br />
                    <a href="#" className="read-more-btn link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="post col-md-4 website all col-10 mt-3 mt-md-0"
                data-aos="fade-up"
              >
                <div className="card">
                  <img
                    src={tictactoe}
                    className="card-img-top"
                    alt="Tic Tac Toe"
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">TicTacToe Game</h4>
                    <span className="badge bg-secondary badge-pill">
                      HTML&CSS
                    </span>
                    <span className="badge bg-secondary badge-pill">
                      JavaScript
                    </span>
                    <span className="badge bg-secondary badge-pill mb-2">
                      Game
                    </span>
                    <br />
                    <a href="#" className="read-more-btn link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="post col-md-4 all col-10 mt-3 mt-md-0"
                data-aos="fade-up"
              >
                <div className="card">
                  <img
                    src={langTranslator}
                    className="card-img-top"
                    alt="Language Translator"
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title">Lang Translator</h4>
                    <span className="badge bg-secondary badge-pill">
                      HTML&CSS
                    </span>
                    <span className="badge bg-secondary badge-pill">
                      JavaScript
                    </span>
                    <span className="badge bg-secondary badge-pill mb-2">
                      Web App
                    </span>
                    <br />
                    <a href="#" className="read-more-btn link">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>{" "}
      {/* Testimonials Section */}
      <section className="testimonial mt-5 pt-5" id="testimonial">
        <div className="container">
          <div className="row justify-content-evenly">
            <div className="col-md-4 col-10" data-aos="slide-right">
              <img
                src={testimonialsImg}
                className="img-fluid"
                alt="Testimonials"
              />
            </div>
            <div className="col-md-6 col-10 mt-5" data-aos="slide-left">
              <div className="heading">
                <small>Testimonials</small>
                <h3>Happy Clients Feedback</h3>

                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row justify-content-evenly">
                        <div className="col-2 text-center">
                          <i className="bi bi-quote"></i>
                        </div>
                        <div className="col-10">
                          <p className="text-muted">
                            Quisruam est, qui dolorem ipsum quia dolor sit amet,
                            consecteaur aeci velit, sed quia non numquam eius
                            modi tempora incidunt ut lao magnam aliquam quaerat
                            ...
                          </p>
                          <h4>Kevin Andrew</h4>
                          <small className="fs-6 text-muted">
                            CEO of Company
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row justify-content-evenly">
                        <div className="col-2 text-center">
                          <i className="bi bi-quote"></i>
                        </div>
                        <div className="col-10">
                          <p className="text-muted">
                            Excellent work and professional service. Highly
                            recommended for anyone looking for quality web
                            development solutions.
                          </p>
                          <h4>Sarah Johnson</h4>
                          <small className="fs-6 text-muted">
                            Marketing Director
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row justify-content-evenly">
                        <div className="col-2 text-center">
                          <i className="bi bi-quote"></i>
                        </div>
                        <div className="col-10">
                          <p className="text-muted">
                            Outstanding creativity and technical skills.
                            Delivered exactly what we needed within the
                            timeline.
                          </p>
                          <h4>Michael Brown</h4>
                          <small className="fs-6 text-muted">
                            Startup Founder
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="nextprev-btn rounded-pill prev-btn"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <i className="bi bi-arrow-left-circle-fill prev"></i>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="nextprev-btn rounded-pill next-btn"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <i className="bi bi-arrow-right-circle-fill next"></i>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>{" "}
      {/* Blog Section */}
      <section className="blog mt-5 pb-5" id="blog">
        <div className="container">
          <div className="heading text-center pt-5">
            <small>Latest News</small>
            <h3>Blog & Articles</h3>
          </div>
          <div
            className="row justify-content-evenly px-4 mt-4"
            data-aos="fade-up"
          >
            <div className="blogpost col-md-4 col-10 mt-2 mt-md-0 game all">
              <div className="card">
                <img
                  src={game2048}
                  className="card-img-top rounded-4"
                  alt="Blog post"
                />
                <div className="card-body px-4">
                  <small>By Pawan Kumavat</small>
                  <span className="ms-3">Mar 8,2022</span>
                  <h4 className="card-title">
                    <a href="">Building Interactive Games with JavaScript</a>
                  </h4>
                  <p className="text-muted">
                    Learn how to create engaging browser games using modern
                    JavaScript techniques and best practices.
                  </p>
                  <a href="#" className="read-more-btn link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="blogpost col-md-4 col-10 mt-5 mt-md-0 website all">
              <div className="card">
                <img
                  src={currencyConverter}
                  className="card-img-top rounded-4"
                  alt="Blog post"
                />
                <div className="card-body px-4">
                  <small>By Pawan Kumavat</small>
                  <span className="ms-3">Mar 15,2022</span>
                  <h4 className="card-title">
                    <a href="">API Integration in Web Applications</a>
                  </h4>
                  <p className="text-muted">
                    Explore different methods of integrating external APIs into
                    your web applications for enhanced functionality.
                  </p>
                  <a href="#" className="read-more-btn link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="blogpost col-md-4 col-10 mt-5 mt-md-0 webapp all">
              <div className="card">
                <img
                  src={dictionary}
                  className="card-img-top rounded-4"
                  alt="Blog post"
                />
                <div className="card-body px-4">
                  <small>By Pawan Kumavat</small>
                  <span className="ms-3">Mar 22,2022</span>
                  <h4 className="card-title">
                    <a href="">React Best Practices and Patterns</a>
                  </h4>
                  <p className="text-muted">
                    Discover essential React patterns and best practices for
                    building scalable and maintainable applications.
                  </p>
                  <a href="#" className="read-more-btn link">
                    Read More
                  </a>
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
                  <p>121 King Street Melbourne, 3000, Australia</p>
                </div>
              </div>
              <div className="row justify-content-evenly">
                <div className="col-1">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="col-11">
                  <p>+91 9527818693</p>
                </div>
              </div>
              <div className="row justify-content-evenly">
                <div className="col-1">
                  <i className="bi bi-send-fill"></i>
                </div>
                <div className="col-11">
                  <p>codewithpawan@gmail.com</p>
                </div>
              </div>
              <div className="row justify-content-evenly">
                <div className="col-1">
                  <i className="bi bi-globe-americas"></i>
                </div>
                <div className="col-11">
                  <p>codingpawan.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-10 mt-3 mt-md-0" data-aos="slide-left">
              <div className="contact-form">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="contactName"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="contactEmail"
                    placeholder="E-mail"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="contactMobile"
                    placeholder="Mobile No."
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="contactMessage"
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                </div>
                <button className="c-btn h-btn ">Submit</button>
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
      </button>
      {/* Footer */}
      <footer className="text-center text-muted py-4">
        <h3 className="text-white pt-4" data-aos="fade-up">
          Portfolio
        </h3>
        <div className="link-group mt-5" data-aos="fade-up">
          <a href="#home">Home</a>
          <div className="vr"></div>
          <a href="#about">About</a>
          <div className="vr"></div>
          <a href="#service">Service</a>
          <div className="vr"></div>
          <a href="#portfolio">Portfolio</a>
          <div className="vr"></div>
          <a href="#blog">Blog</a>
          <div className="vr"></div>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-links mt-5" data-aos="fade-up">
          <button className="rounded-pill dribble">
            <i className="bi bi-dribbble"></i>
          </button>
          <button className="rounded-pill whatsapp">
            <i className="bi bi-whatsapp"></i>
          </button>
          <button className="rounded-pill behance">
            <i className="bi bi-behance"></i>
          </button>
        </div>
        <hr className="text-muted my-4" />
        <p>Copyright 2025 Piumal Harshana Portfolio | All Rights Reserved.</p>
      </footer>
    </div>
  );
}
