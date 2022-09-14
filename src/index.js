import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./app/App.js";
// Import the store here.
import { store } from "./app/store";

// Pass state and dispatch props to the <App /> component.

const root = ReactDOM.createRoot(document.getElementById("root"));
const render = () => {
  root.render(
    <React.StrictMode>
      <App 
      state={store.getState()} 
      dispatch={store.dispatch} 
      />
    </React.StrictMode>
  );
};
render();
// Subscribe render to the store here.
store.subscribe(render);
