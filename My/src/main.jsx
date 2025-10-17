import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

// Hide loading screen and show app
const hideLoadingScreen = () => {
  const loadingScreen = document.getElementById("loading-screen");
  const root = document.getElementById("root");

  if (loadingScreen && root) {
    // Add loaded class to root
    root.classList.add("loaded");

    // Hide loading screen after a short delay
    setTimeout(() => {
      loadingScreen.classList.add("hide");

      // Remove loading screen from DOM after transition
      setTimeout(() => {
        if (loadingScreen.parentNode) {
          loadingScreen.parentNode.removeChild(loadingScreen);
        }
      }, 500);
    }, 800); // Show loading for at least 800ms for better UX
  }
};

// Initialize app
const initApp = () => {
  const root = createRoot(document.getElementById("root"));

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );

  // Hide loading screen after React app is mounted
  setTimeout(hideLoadingScreen, 100);
};

// Wait for DOM to be ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
