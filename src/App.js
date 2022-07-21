import React from "react";
import Background from "./containers/Background";
import "./App.css";
import MainView from "./containers/MainView";

function App() {
  return (
    <div className="App">
      <Background />
      <MainView />
    </div>
  );
}

export default App;
