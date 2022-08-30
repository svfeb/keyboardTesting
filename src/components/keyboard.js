import React from "react";

function Keyboard() {
  return (
    <div className="keyboard">
      <p>Press the keys on your keyboard to run the test</p>

      <div className="keyboardRow keyboardRowH1">
        <div data-key="27" className="keyWord">
          <span>esc</span>
        </div>
        <div data-key="112" className="key-F">
          <span>F1</span>
        </div>
        <div data-key="113" className="key-F">
          <span>F2</span>
        </div>
        <div data-key="114" className="key-F">
          <span>F3</span>
        </div>
        <div data-key="115" className="key-F">
          <span>F4</span>
        </div>
        <div data-key="116" className="key-F">
          <span>F5</span>
        </div>
        <div data-key="117" className="key-F">
          <span>F6</span>
        </div>
        <div data-key="118" className="key-F">
          <span>F7</span>
        </div>
        <div data-key="119" className="key-F">
          <span>F8</span>
        </div>
        <div data-key="120" className="key-F">
          <span>F9</span>
        </div>
        <div data-key="121" className="key-F">
          <span>F10</span>
        </div>
        <div data-key="122" className="key-F">
          <span>F11</span>
        </div>
        <div data-key="123" className="key-F">
          <span>F12</span>
        </div>
        <div data-key="44" className="keyLetter">
          <span>PrtSc</span>
        </div>
        <div data-key="145" className="keyLetter">
          <span>Scroll</span>
        </div>
        <div data-key="19" className="keyLetter">
          <span>Pause</span>
        </div>
      </div>
      <div className="keyboardRow">
        <div className="keyLetter" data-key="192">
          <div>`</div>
        </div>
        <div className="keyLetter" data-key="49">
          <div>1</div>
        </div>
        <div className="keyLetter" data-key="50">
          <div>2</div>
        </div>
        <div className="keyLetter" data-key="51">
          <div>3</div>
        </div>
        <div className="keyLetter" data-key="52">
          <div>4</div>
        </div>
        <div className="keyLetter" data-key="53">
          <div>5</div>
        </div>
        <div className="keyLetter" data-key="54">
          <div>6</div>
        </div>
        <div className="keyLetter" data-key="55">
          <div>7</div>
        </div>
        <div className="keyLetter" data-key="56">
          <div>8</div>
        </div>
        <div className="keyLetter" data-key="57">
          <div>9</div>
        </div>
        <div className="keyLetter" data-key="48">
          <div>0</div>
        </div>
        <div className="keyLetter" data-key="189">
          <div>-</div>
        </div>
        <div className="keyLetter" data-key="187">
          <div>=</div>
        </div>
        <div className="keyBottomRight keyWord keyW4" data-key="8">
          <span>Backspace</span>
        </div>

        <div className="keyLetter" data-key="192">
          <div>NUM</div>
        </div>
        <div data-key="45" className="keyLetter">
          <span>Ins</span>
        </div>
        <div data-key="36" className="keyLetter">
          <span>Home</span>
        </div>
        <div data-key="33" className="keyLetter">
          <span>PgUp</span>
        </div>
        <div className="keyLetter" data-key="144">
          <div>/</div>
        </div>
        <div className="keyLetter" data-key="106">
          <div>*</div>
        </div>
        <div className="keyLetter" data-key="109">
          <div>-</div>
        </div>
      </div>
      <div className="keyboardRow">
        <div className="keyBottomLeft keyWord keyW4" data-key="9">
          <span>Tab</span>
        </div>
        <div className="keyLetter" data-char="Q">
          Q
        </div>
        <div className="keyLetter" data-char="W">
          W
        </div>
        <div className="keyLetter" data-char="E">
          E
        </div>
        <div className="keyLetter" data-char="R">
          R
        </div>
        <div className="keyLetter" data-char="T">
          T
        </div>
        <div className="keyLetter" data-char="Y">
          Y
        </div>
        <div className="keyLetter" data-char="U">
          U
        </div>
        <div className="keyLetter" data-char="I">
          I
        </div>
        <div className="keyLetter" data-char="O">
          O
        </div>
        <div className="keyLetter" data-char="P">
          P
        </div>
        <div className="keyLetter" data-key="219" data-char="{[">
          <div>[</div>
        </div>
        <div className="keyLetter" data-key="221" data-char="}]">
          <div>]</div>
        </div>
        <div className="keyLetter" data-key="220" data-char="|\">
          <div>\</div>
        </div>
        <div data-key="46" className="keyLetter">
          <span>Del</span>
        </div>
        <div data-key="35" className="keyLetter">
          <span>End</span>
        </div>
        <div data-key="34" className="keyLetter">
          <span>PgDn</span>
        </div>
        <div className="keyLetter" data-key="55">
          <div>7</div>
        </div>
        <div className="keyLetter" data-key="56">
          <div>8</div>
        </div>
        <div className="keyLetter" data-key="57">
          <div>9</div>
        </div>
        <div className="keyLetter" data-key="107">
          <div>+</div>
        </div>
      </div>
      <div className="keyboardRow">
        <div className="keyBottomLeft keyWord keyW5" data-key="20">
          <span>CapsLock</span>
        </div>
        <div className="keyLetter" data-char="A">
          A
        </div>
        <div className="keyLetter" data-char="S">
          S
        </div>
        <div className="keyLetter" data-char="D">
          D
        </div>
        <div className="keyLetter" data-char="F">
          F
        </div>
        <div className="keyLetter" data-char="G">
          G
        </div>
        <div className="keyLetter" data-char="H">
          H
        </div>
        <div className="keyLetter" data-char="J">
          J
        </div>
        <div className="keyLetter" data-char="K">
          K
        </div>
        <div className="keyLetter" data-char="L">
          L
        </div>
        <div className="keyLetter" data-key="186">
          <div>;</div>
        </div>
        <div className="keyLetter" data-key="221">
          <div>'</div>
        </div>
        <div className="keyBottomRight keyWord keyW5" data-key="13">
          <span>Enter</span>
        </div>

        <div className="keyLetter" data-key="52">
          <div>4</div>
        </div>
        <div className="keyLetter" data-key="53">
          <div>5</div>
        </div>
        <div className="keyLetter" data-key="54">
          <div>6</div>
        </div>

        <div className="keyLetter" data-key="51">
          <div>%</div>
        </div>
      </div>
      <div className="keyboardRow">
        <div className="keyBottomLeft keyWord keyW6" data-key="16">
          <span>shift</span>
        </div>

        <div className="keyLetter" data-char="Z">
          Z
        </div>
        <div className="keyLetter" data-char="X">
          X
        </div>
        <div className="keyLetter" data-char="C">
          C
        </div>
        <div className="keyLetter" data-char="V">
          V
        </div>
        <div className="keyLetter" data-char="B">
          B
        </div>
        <div className="keyLetter" data-char="N">
          N
        </div>
        <div className="keyLetter" data-char="M">
          M
        </div>
        <div className="keyLetter" data-key="188">
          <div>,</div>
        </div>
        <div className="keyLetter" data-key="190">
          <div>.</div>
        </div>
        <div className="keyLetter" data-key="191">
          <div>/</div>
        </div>
        <div className="keyBottomRight keyWord keyW6" data-key="16">
          <span>shift</span>
        </div>
        <div className="keyArrowTall" data-key="38">
          <div>&#9650;</div>
        </div>
        <div className="keyLetter" data-key="49">
          <div>1</div>
        </div>
        <div className="keyLetter" data-key="50">
          <div>2</div>
        </div>
        <div className="keyLetter" data-key="51">
          <div>3</div>
        </div>
      </div>
      <div className="keyboardRow keyboardRowH3">
        <div className="keyBottomLeft keyWord keyW1" data-key="17">
          <span>Ctrl</span>
        </div>
        <div className="keyBottomLeft keyWord keyW1" data-key="91">
          <span>Window</span>
        </div>
        <div className="keyBottomLeft keyWord keyW1" data-key="18">
          <span>Alt</span>
        </div>
        <div className="keyBottomRight keyWord keyW3" data-key="17">
          <span>Ctrl</span>
        </div>
        <div className="keyBottomRight keyWord keyW3" data-key="91">
          <span>Window</span>
        </div>
        <div className="keyBottomRight keyWord keyW3" data-key="18">
          <span>Alt</span>
        </div>

        <div
          className="keyLetter keyRight keySpace"
          data-key="32"
          data-char=" "
        >
          &nbsp;
        </div>
        <div data-key="37" className="keyArrow">
          <span>&#9664;</span>
        </div>
        <div className="keyArrowTall" data-key="40">
          <div>&#9660;</div>
        </div>
        <div data-key="39" className="keyArrow">
          <span>&#9654;</span>
        </div>
        <div className="keyLetter" data-key="48">
          <div>0</div>
        </div>
        <div className="keyLetter" data-key="110">
          <div>.</div>
        </div>

        <div className="keyLetter" data-key="13">
          <div>Enter</div>
        </div>
      </div>
    </div>
  );
}

export default Keyboard;
