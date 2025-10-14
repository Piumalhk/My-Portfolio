import React, { useEffect, useState } from "react";
import "./index.css";
import { usePortfolioEffects } from "./usePortfolioEffects";

// Import images
import banner01 from "../assets/banner-01.webp";
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
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  Blog
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
               <span className="h">Hello! I Am</span>  <br />
                <span className="c-orange">Piumal Harshana</span>
              </h2>
            
                <span className="one">And I'm A</span>  <span className="two"> Full-Stack Developer</span><br/> <br/>  <p className="text">having 5 years of experience in expertise of
                creating website with fully responsive Also with backend part
                too.
              </p>
            
              <button className="h-btn  ">
                Hire Me
              </button>
          
        
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
          <div className="heading text-center">
            <small>My Expertise</small>
            <h3>
              Provide Wide Range of <br />
              Digital Services
            </h3>
          </div>
          <div className="row justify-content-evenly mt-5">
            <div className="col-10 col-md-4" data-aos="fade-up">
              <div className="service-card">
                <div className="img">
                  <img
                    src={serviceIcon1}
                    className="w-25 img-fluid img"
                    alt="Web Design"
                  />
                </div>
                <div className="content mt-3">
                  <h4>Web Design</h4>
                  <p className="text-muted">
                    Dolor repellendus temporibus autem quibusdam officiis
                    debitis rerum neces aibus minima veniam.
                  </p>
                  <a href="" className="link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-10" data-aos="fade-up">
              <div className="service-card">
                <div className="img">
                  <img
                    src={serviceIcon2}
                    className="w-25 img-fluid img"
                    alt="Web Development"
                  />
                </div>
                <div className="content mt-3">
                  <h4>Web Development</h4>
                  <p className="text-muted">
                    Dolor repellendus temporibus autem quibusdam officiis
                    debitis rerum neces aibus minima veniam.
                  </p>
                  <a href="" className="link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-10" data-aos="fade-up">
              <div className="service-card">
                <div className="img">
                  <img
                    src={serviceIcon3}
                    className="w-25 img-fluid img"
                    alt="Debugging"
                  />
                </div>
                <div className="content mt-3">
                  <h4>Debugging</h4>
                  <p className="text-muted">
                    Dolor repellendus temporibus autem quibusdam officiis
                    debitis rerum neces aibus minima veniam.
                  </p>
                  <a href="" className="link">
                    Read More
                  </a>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="skill mt-5 py-5" id="about">
        <div className="container">
          <div className="row justify-content-evenly">
            <div
              className="col-10 col-md-5 skill-with-progress"
              data-aos="slide-right"
            >
              <div className="row justify-content-evenly">
                <div className="col-10 col-md-6">
                  <div className="progress-card ms-3 ms-md-0">
                    <div
                      className="circular-progress html-css"
                      style={{
                        background: `conic-gradient(#fca61f ${
                          htmlProgress * 3.6
                        }deg, #ededed 0deg)`,
                      }}
                    >
                      <span className="progress-value html-progress">
                        {htmlProgress}%
                      </span>
                    </div>
                    <br />
                    <span className="text">HTML & CSS</span>
                  </div>
                </div>
                <div className="col-10 col-md-6 mt-4 mt-md-0">
                  <div className="progress-card ms-3 ms-md-0">
                    <div
                      className="circular-progress javascript"
                      style={{
                        background: `conic-gradient(#7d2ae8 ${
                          jsProgress * 3.6
                        }deg, #ededed 0deg)`,
                      }}
                    >
                      <span className="progress-value javascript-progress">
                        {jsProgress}%
                      </span>
                    </div>
                    <br />
                    <span className="text">JavaScript</span>
                  </div>
                </div>
              </div>
              <div className="row justify-content-evenly mt-4">
                <div className="col-10 col-md-6">
                  <div className="progress-card ms-3 ms-md-0">
                    <div
                      className="circular-progress php"
                      style={{
                        background: `conic-gradient(#20bf6b ${
                          phpProgress * 3.6
                        }deg, #ededed 0deg)`,
                      }}
                    >
                      <span className="progress-value php-progress">
                        {phpProgress}%
                      </span>
                    </div>
                    <br />
                    <span className="text">PHP</span>
                  </div>
                </div>
                <div className="col-10 col-md-6 mt-4 mt-md-0">
                  <div className="progress-card ms-3 ms-md-0">
                    <div
                      className="circular-progress reactjs"
                      style={{
                        background: `conic-gradient(#3742fa ${
                          reactProgress * 3.6
                        }deg, #ededed 0deg)`,
                      }}
                    >
                      <span className="progress-value reactjs-progress">
                        {reactProgress}%
                      </span>
                    </div>
                    <br />
                    <span className="text">ReactJS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10 col-md-5 skill-detail" data-aos="slide-left">
              <div className="heading mt-5 mt-md-3">
                <small>My Skills</small>
                <h3>Beautiful & Unique Digital Experiences</h3>
                <p className="text-muted">
                  Nostrum exercitationem ullam corporis suscipit laborioa nisi
                  ut aliquid exrea commodi consequatur magni dolores aos qui
                  ratione voluptatem nesciunt.
                </p>
                <p className="text-muted">
                  Quia voluptas sit aspernatur aut odit aut fugit, sed ruiano
                  consequntar magni dolores.
                </p>
                
              </div>{" "}
            </div>
          </div>
        </div>
      </section>{" "}
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
                <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">
                  Submit
                </button>
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
        <p>Copyright 2022 Portfolio | All Rights Reserved.</p>
      </footer>
    </div>
  );
}
