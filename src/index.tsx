import { Font, PDFViewer } from "@react-pdf/renderer";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Resume } from "./Resume";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "http://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf",
    },
    {
      src: "http://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu52xPKTM1K9nz.ttf",
      fontStyle: "italic",
    },
    {
      src: "http://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9vAx05IsDqlA.ttf",
      fontStyle: "bold",
    },
  ],
});

ReactDOM.render(
  <React.StrictMode>
    <PDFViewer>
      <Resume />
    </PDFViewer>
  </React.StrictMode>,
  document.getElementById("root")
);
