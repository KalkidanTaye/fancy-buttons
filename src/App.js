import "./App.css";
import AngryButtons from "./components/AngryButton";
import CounterButtons from "./components/CounterButton";
import LightSwitchButtons from "./components/LightSwitchButton";
import TextRepeaterButtons from "./components/TextReapeaterButton";

function App() {
  return (
    <div className="App">
      <h1>Fancy Buttons</h1>
      <section>
        <AngryButtons />
        <CounterButtons />
        <LightSwitchButtons />
        <TextRepeaterButtons />
      </section>
    </div>
  );
}

export default App;
