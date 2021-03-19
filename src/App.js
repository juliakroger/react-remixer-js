import React from "react";
import "./App.css";
import SimpleRemixerAnimation from "./remixers/SimpleRemixerAnimation";
import SelectRemixerAnimate from "./remixers/SelectRemixerAnimate";
import SelectRemixerAnimateIn from "./remixers/SelectRemixerAnimateIn";

const App = () => {
  return (
    <div className="cards-row">
      <SimpleRemixerAnimation />
      <SelectRemixerAnimate />
      <SelectRemixerAnimateIn />
    </div>
  );
};

export default App;
