import React from "react";
import "./App.css";
import image from "./image.svg";

/* Import Components */
import Form from "./Form";

function App() {
  return (
    <div className="main">
      <div className="main-container">
        <div className="row">
        <div className="col-md-6 pic">
          <img src={image} />
        </div>
        <div className="col-md-6">
          <Form /></div>
      </div>
        </div>
        
    </div>
  )
}

export default App;
