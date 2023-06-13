import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Resume } from "./Resume";

ReactDOM.render(
  <React.StrictMode>
    <PDFViewer>
      <Resume />
    </PDFViewer>
  </React.StrictMode>,
  document.getElementById("root")
);
