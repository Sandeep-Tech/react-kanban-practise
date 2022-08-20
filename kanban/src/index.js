import React from "react";
import ReactDOM from "react-dom/client";
// Use your own styles to override the default styles
// import "./styles.css";

import ControlledBoard from "./ControlledBoard";
import UncontrolledBoard from "./UncontrolledBoard";
import DexieDemo from "./DexieDemo";

function App() {
  return (
    <>
      <DexieDemo />
      {/* <h4>Example of an uncontrolled board</h4>
      <UncontrolledBoard />

      <hr />

      <h4>Example of a controlled board</h4>
      <p>Just the card moving is implemented in this demo.</p>
      <p>
        In this kind of board, you can do whatever you want. We just mirror your
        board state.
      </p>
      <ControlledBoard /> */}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
