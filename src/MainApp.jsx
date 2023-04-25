import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./App.css";

const MainApp = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={text}
          viewBox={`0 0 256 256`}
        />
      </div>
      <div className="input-here">
        <p>Enter your text here</p>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
    </div>
  );
};

export default MainApp;
