import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import CSS in the correct order to prevent FOUC
import "./index.css";
import App from "./App.jsx";

// Function to handle loading overlay
const hideLoadingOverlay = () => {
  const overlay = document.getElementById("loading-overlay");
  if (overlay) {
    overlay.classList.add("loaded");
    setTimeout(() => {
      overlay.remove();
    }, 300);
  }
};

// Initialize app and hide loading overlay
const initializeApp = () => {
  const root = createRoot(document.getElementById("root"));

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );

  // Hide loading overlay after a short delay to ensure fonts are loaded
  setTimeout(hideLoadingOverlay, 100);
};

// Wait for DOM to be ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
