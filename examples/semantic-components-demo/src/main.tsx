import React from "react";
import { createRoot } from "react-dom/client";
import "./token-styles.css";
import "./styles.css";
import { SemanticShowcase } from "./showcase";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SemanticShowcase />
  </React.StrictMode>,
);
