import React from "react";
import "../app.css";

function Header() {
  return (
    <div className="container">
      <h1>Keyboard Test</h1>
      <p>
        Free online keyboard test to check if the keyboard keys are working well
        or not.
      </p>
      <textarea
        className="form-control"
        rows="7"
        cols="80"
        placeholder="Press any key...."
      ></textarea>
    </div>
  );
}

export default Header;
