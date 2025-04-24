import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AOS from "aos";
import RootLayout from "./RootLayout.jsx";
import { BrowserRouter } from "react-router-dom";
import "/src/styles/index.css";

AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RootLayout />
    </BrowserRouter>
  </StrictMode>
);
