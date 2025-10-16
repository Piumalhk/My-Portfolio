import { useEffect } from "react";

// Custom hook for portfolio functionality
export const usePortfolioEffects = () => {
  useEffect(() => {
    // Filter functionality
    const setupPortfolioFilter = () => {
      // Wait for jQuery to be loaded
      const checkJQuery = () => {
        if (window.$ && window.jQuery) {
          window.$(document).ready(function () {
            window.$(".filter-item").click(function () {
              const value = window.$(this).attr("data-filter");
              if (value === "all") {
                window.$(".post").show("1000");
              } else {
                window
                  .$(".post")
                  .not("." + value)
                  .hide("1000");
                window
                  .$(".post")
                  .filter("." + value)
                  .show("1000");
              }
            });
          });
        } else {
          setTimeout(checkJQuery, 100);
        }
      };
      checkJQuery();
    };

    // Sticky navbar functionality
    const setupStickyNavbar = () => {
      const handleScroll = () => {
        const navbar = document.getElementById("navbar-top");
        if (navbar) {
          if (window.scrollY > 50) {
            navbar.classList.add("fixed-top");
            const navbarHeight = navbar.offsetHeight;
            document.body.style.paddingTop = navbarHeight + "px";
          } else {
            navbar.classList.remove("fixed-top");
            document.body.style.paddingTop = "0";
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };

    // Back to top button functionality
    const setupBackToTop = () => {
      const backToTopBtn = document.getElementById("btn-back-to-top");

      const scrollFunction = () => {
        if (backToTopBtn) {
          if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
          ) {
            backToTopBtn.style.display = "block";
          } else {
            backToTopBtn.style.display = "none";
          }
        }
      };

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

      window.addEventListener("scroll", scrollFunction);

      if (backToTopBtn) {
        backToTopBtn.addEventListener("click", scrollToTop);
      }

      return () => {
        window.removeEventListener("scroll", scrollFunction);
        if (backToTopBtn) {
          backToTopBtn.removeEventListener("click", scrollToTop);
        }
      };
    };

    // Initialize all effects
    setupPortfolioFilter();
    const cleanupNavbar = setupStickyNavbar();
    const cleanupBackToTop = setupBackToTop();

    // Cleanup function
    return () => {
      if (cleanupNavbar) cleanupNavbar();
      if (cleanupBackToTop) cleanupBackToTop();
    };
  }, []);
};
