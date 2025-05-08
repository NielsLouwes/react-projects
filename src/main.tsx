import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { App } from "./pages/app";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector("#root")!);

root.render(
  <StrictMode>
    <BrowserRouter>
      {" "}
      <App />
    </BrowserRouter>
  </StrictMode>
);
