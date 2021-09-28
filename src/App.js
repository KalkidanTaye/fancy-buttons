import React, { useState } from "react";
import "./App.css";
import AngryButtons from "./components/AngryButton";
import CounterButtons from "./components/CounterButton";
import LightSwitchButtons from "./components/LightSwitchButton";
import TextRepeaterButtons from "./components/TextReapeaterButton";

function App() {
  const [light, setLight] = useState("off");
  const dark = light === "off" ? "dark" : "";
  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons</h1>
      <section>
        <AngryButtons />
        <CounterButtons />
        <LightSwitchButton light={light} setLight={setLight} />
        <TextRepeaterButtons />
      </section>
    </div>
  );
}

export default App;
