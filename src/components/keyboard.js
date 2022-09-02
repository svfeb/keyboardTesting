import React, { useState } from "react";
import { keyboardRows, keyData } from "./data/keyboardData";

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

    const allKeys = keyData.map((ele) => ele.key);

    for (let i = 0; i < allKeys.length; i++) {
      const pressedKey = allKeys[i];
      console.log(pressedKey, e.target.value.toUpperCase());
      if (+String(pressedKey).toUpperCase()?.charCodeAt(0) === +keyCode) {
        // to continue... change color of pressed key
const strColor = pressedKey.replace(/\d+/, match => <span style={{color: 'red'}}> {match} </span> );
        setTimeout(() => {
          pressedKey.replace(/\d+/, match => <span style={{color: 'red'}}> {match} </span> );
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
        <div className="row">
          <div className="group">
            {Object.keys(keyboardRows).map((row, i) => {
              let _row = row + i;
              return (
                <div className="row" key={_row}>
                  {keyboardRows[row].map((x, i) => {
                    let _x = x + i;
                    return (
                      <div className="key" key={_x}>
                        {x}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="row">
          <div className="group">
            <div data-key="27" className="key">
              Esc
            </div>
            <div className="mini-group">
              <div data-key="112" className="key">
                F1
              </div>
              <div data-key="113" className="key">
                F2
              </div>
              <div data-key="114" className="key">
                F3
              </div>
              <div data-key="115" className="key">
                F4
              </div>
              <div data-key="116" className="key">
                F5
              </div>
              <div data-key="117" className="key">
                F6
              </div>
              <div data-key="118" className="key">
                F7
              </div>
              <div data-key="119" className="key">
                F8
              </div>
              <div data-key="120" className="key">
                F9
              </div>
              <div data-key="121" className="key">
                F10
              </div>
              <div data-key="122" className="key">
                F11
              </div>
              <div data-key="123" className="key">
                F12
              </div>
            </div>
          </div>
          <div className="group lock1">
            <div className="lock1">
              <div data-key="-1" className="key">
                PrtSc
              </div>
              <div data-key="145" className="key">
                Scroll
              </div>
              <div data-key="19" className="key">
                Pause
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="group">
            <div data-key="192" className="key large">
              <i>`</i>
            </div>
            <div data-key="49" className="key">
              <span>1</span>
            </div>
            <div data-key="50" className="key">
              <span>2</span>
            </div>
            <div data-key="51" className="key">
              <span>3</span>
            </div>
            <div data-key="52" className="key">
              <span>4</span>
            </div>
            <div data-key="53" className="key">
              <span>5</span>
            </div>
            <div data-key="54" className="key">
              <span>6</span>
            </div>
            <div data-key="55" className="key">
              <span>7</span>
            </div>
            <div data-key="56" className="key">
              <span>8</span>
            </div>
            <div data-key="57" className="key">
              <span>9</span>
            </div>
            <div data-key="48" className="key">
              <span>0</span>
            </div>
            <div data-key="189" className="key">
              <i className="underscore">_</i>
            </div>
            <div data-key="187" className="key">
              <span>=</span>
            </div>
            <div data-key="8" className="key backspace">
              <i className="fas fa-arrow-left-long"></i>
            </div>
          </div>
          <div className="group">
            <div data-key="45" className="key">
              Ins
            </div>
            <div data-key="36" className="key">
              Home
            </div>
            <div data-key="33" className="key">
              PgUp
            </div>
          </div>
          <div className="group">
            <div data-key="144" className="key">
              Num
            </div>
            <div data-key="111" className="key">
              /
            </div>
            <div data-key="106" className="key">
              *
            </div>
            <div data-key="109" className="key">
              -
            </div>
          </div>
        </div>

        <div className="row">
          <div className="group">
            <div data-key="9" className="key tab">
              ⭾Tab
            </div>
            <div data-key="81" className="key">
              Q
            </div>
            <div data-key="87" className="key">
              W
            </div>
            <div data-key="69" className="key">
              E
            </div>
            <div data-key="82" className="key">
              R
            </div>
            <div data-key="84" className="key">
              T
            </div>
            <div data-key="89" className="key">
              Y
            </div>
            <div data-key="85" className="key">
              U
            </div>
            <div data-key="73" className="key">
              I
            </div>
            <div data-key="79" className="key">
              O
            </div>
            <div data-key="80" className="key">
              P
            </div>
            <div data-key="219" className="key">
              <span> &#91;</span>
            </div>
            <div data-key="221" className="key">
              <span> &#93;</span>
            </div>
            <div data-key="220" className="key">
              <span>\</span>
            </div>
          </div>
          <div className="group">
            <div data-key="46" className="key">
              Del
            </div>
            <div data-key="35" className="key">
              End
            </div>
            <div data-key="34" className="key">
              PgDn
            </div>
          </div>
          <div className="group">
            <div data-key="103" className="key">
              <span>7</span>
            </div>
            <div data-key="104" className="key ">
              <span>8</span>
            </div>
            <div data-key="105" className="key">
              <span>9</span>
            </div>
            <div data-key="107" className="key num-large">
              +
            </div>
          </div>
        </div>

        <div className="row">
          <div className="group">
            <div data-key="20" className="key tab">
              CapsLock
            </div>
            <div data-key="65" className="key">
              A
            </div>
            <div data-key="83" className="key">
              S
            </div>
            <div data-key="68" className="key">
              D
            </div>
            <div data-key="70" className="key">
              F
            </div>
            <div data-key="71" className="key">
              G
            </div>
            <div data-key="72" className="key">
              H
            </div>
            <div data-key="74" className="key">
              J
            </div>
            <div data-key="75" className="key">
              K
            </div>
            <div data-key="76" className="key">
              L
            </div>
            <div data-key="186" className="key">
              <span>;</span>
            </div>
            <div data-key="222" className="key">
              <span>'</span>
            </div>
            <div data-key="13" className="key enter">
              Enter
            </div>
          </div>
          <div className="empty-group"></div>
          <div className="group">
            <div data-key="100" className="key">
              <span>4</span>
            </div>
            <div data-key="101" className="key ">
              <span>5</span>
            </div>
            <div data-key="102" className="key">
              <span>6</span>
            </div>
            <p className="key key-empty"></p>
          </div>
        </div>

        <div className="row">
          <div className="group">
            <div data-key="16" className="key shift l-s">
              <span>Shift</span>
            </div>
            <div data-key="90" className="key">
              Z
            </div>
            <div data-key="88" className="key">
              X
            </div>
            <div data-key="67" className="key">
              C
            </div>
            <div data-key="86" className="key">
              V
            </div>
            <div data-key="66" className="key">
              B
            </div>
            <div data-key="78" className="key">
              N
            </div>
            <div data-key="77" className="key">
              M
            </div>
            <div data-key="188" className="key">
              <span>,</span>
            </div>
            <div data-key="190" className="key">
              <span>.</span>
            </div>
            <div data-key="191" className="key">
              <span>/</span>
            </div>
            <div data-key="16" className="key shift r-s">
              <span>Shift</span>
            </div>
          </div>
          <div className="group">
            <p className="key key-empty"></p>
            <div data-key="38" className="key">
              <i className="fas fa-arrow-up"></i>
            </div>
            <p className="key key-empty"></p>
          </div>
          <div className="group">
            <div data-key="97" className="key">
              <span>1</span>
            </div>
            <div data-key="98" className="key">
              <span>2</span>
            </div>
            <div data-key="99" className="key">
              <span>3</span>
            </div>
            <div data-key="13" className="key num-large">
              Enter
            </div>
          </div>
        </div>

        <div className="row">
          <div className="group">
            <div data-key="17" className="key">
              Ctrl
            </div>

            <div data-key="91" className="key">
              <i className="fab fa-windows"></i>
            </div>
            <div data-key="18" className="key">
              Alt
            </div>
            <div data-key="32" className="key spaceBar">
              Space
            </div>
            <div data-key="18" className="key">
              Alt
            </div>
            <div data-key="-2" className="key">
              <i className="fab fa-windows"></i>
            </div>
            <div data-key="17" className="key">
              Ctrl
            </div>
          </div>
          <div className="group">
            <div data-key="37" className="key">
              <i className="fas fa-arrow-left"></i>
            </div>
            <div data-key="40" className="key">
              <i className="fas fa-arrow-down"></i>
            </div>
            <div data-key="39" className="key">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          <div className="group">
            <div data-key="96" className="key num-ins">
              <span>0</span>
            </div>
            <div data-key="110" className="key">
              <span>.</span>
            </div>
            <p className="key key-empty"></p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Keyboard;
