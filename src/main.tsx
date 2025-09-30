
  import { createRoot } from "react-dom/client";
  import App from "./App";
  import { StrictMode } from "react";
  import { SpeedInsights } from "@vercel/speed-insights/react";
  import "./index.css";

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <SpeedInsights />
      <App />
    </StrictMode>
  );
  