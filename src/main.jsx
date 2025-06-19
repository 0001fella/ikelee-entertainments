import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles/tailwind.css";

// Find root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element with ID 'root' not found in HTML.");
  throw new Error("Failed to mount React app: missing root element.");
}

// Mount the app
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
