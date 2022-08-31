import React, { useState } from "react";
import "../App.css";

function Header() {
  const [state, setState] = useState({
    iconClass: true,
    text: "",
  });

  const eraseText = () => {
    setState({ ...state, text: "", iconClass: false });
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h1 style={{ fontWeight: "bold", color: "#075594" }}>Keyboard Test</h1>
        <p style={{ color: "#36668d", fontSize: "25px", fontWeight: "bold" }}>
          Free online keyboard test to check if the keyboard keys are working
          well or not
        </p>
        <textarea
          style={{
            borderRadius: "10px",
            fontSize: "25px",
            maxWidth: "95%",
            border: "4px solid white",
            resize: "none",
            marginTop: "10px",
            marginBottom: "-50px",
          }}
          className="form-control"
          rows="5"
          cols="70"
          value={state.text}
          onChange={(e) => {
            setState({ ...state, text: e.target.value, iconClass: true });
          }}
          placeholder="Press any key...."
        ></textarea>
        {state.iconClass && (
          <span
            style={{
              marginLeft: "950px",
              borderRadius: "5px",
            }}
          >
            {state.iconClass && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                onClick={eraseText}
              >
                <path d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z" />
              </svg>
            )}
          </span>
        )}
      </div>
    </div>
  );
}

export default Header;
