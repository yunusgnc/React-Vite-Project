import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import MyNavbar from "./component/Navbar";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <MyNavbar />
    </ThemeProvider>
  </React.StrictMode>
);
