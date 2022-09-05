import React, { useState } from "react";
import keyboardRows from "./data/keyboardData";

function Keyboard() {
  const [state, setState] = useState({
    hideDeleteIcon: true,
    text: "",
    latestKey: "",
  });

  const handleChange = (e) => {
    const keyCode = e.target.value
      ? e.target.value.toUpperCase()?.charCodeAt(e.target.value.length - 1)
      : null;
    setState({
      ...state,
      text: e.target.value,
      hideDeleteIcon: true,
      latestKey: keyCode,
    });
    const allKeysDivs = document.getElementsByClassName("key");

    for (let i = 0; i < allKeysDivs.length; i++) {
      const pressedKeyDiv = allKeysDivs[i];

      if (
        pressedKeyDiv.getAttribute("data-key").length === 1 &&
        +pressedKeyDiv.getAttribute("data-key").toUpperCase()?.charCodeAt(0) ===
          +keyCode
      ) {
        pressedKeyDiv.classList.add("key-press");
        setTimeout(() => {
          pressedKeyDiv.classList.remove("key-press");
        }, 200);
      }
    }
  };

  const eraseText = () => {
    setState({ ...state, text: "", hideDeleteIcon: false });
  };

  return (
    <div className="keyboard-container">
      <div className="wrapper">
        <div className="container">
          <h1 style={{ fontWeight: "bold", color: "white" }}>Keyboard Test</h1>
          <p style={{ color: "white", fontSize: "25px", fontWeight: "bold" }}>
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
            onChange={handleChange}
            placeholder="Press any key...."
          ></textarea>
          {state.hideDeleteIcon && (
            <span
              style={{
                marginLeft: "950px",
                borderRadius: "5px",
              }}
            >
              {state.hideDeleteIcon && (
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
      <div className="keyboard">
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Press the keys on your keyboard to run the test
        </p>
        <div>
          <div>
            <div className="group">
              {Object.keys(keyboardRows).map((row, i) => {
                let _row = row + i;
                return (
                  <div className="row" key={_row}>
                    {keyboardRows[row].map((keys, i) => {
                      let _id = keys + i;

                      return keys === "Windows" ? (
                        <div data-key={keys} key={_id} className="key">
                          <i className="fab fa-windows"></i>
                        </div>
                      ) : keys === "Backspace" ? (
                        <div
                          data-key={keys}
                          key={_id}
                          className="key backspace"
                        >
                          <i className="fas fa-arrow-left-long"></i>
                        </div>
                      ) : keys === "Shift" ? (
                        <div
                          data-key={keys}
                          key={_id}
                          className="key shift r-s"
                        >
                          <span>Shift</span>
                        </div>
                      ) : keys === "Space" ? (
                        <div data-key={keys} key={_id} className="key spaceBar">
                          Space
                        </div>
                      ) : (
                        <div className="key" data-key={keys} key={_id}>
                          {keys}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Keyboard;
