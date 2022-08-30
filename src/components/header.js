import React from "react";

function Header() {
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
          placeholder="Press any key...."
        ></textarea>
        <div style={{ marginLeft: "950px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
