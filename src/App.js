import React from "react";
import "./App.css";
import SimpleRemixerAnimation from "./remixers/SimpleRemixerAnimation";
import SelectRemixerAnimate from "./remixers/SelectRemixerAnimate";
import SelectRemixerAnimateIn from "./remixers/SelectRemixerAnimateIn";
import SimpleRemixerAnimationDisableAndEnable from "./remixers/SimpleRemixerAnimationDisableAndEnable";

const App = () => {
  return (
    <div className="cards-row">
      <SimpleRemixerAnimation />
      <SelectRemixerAnimate />
      <SelectRemixerAnimateIn />
      <SimpleRemixerAnimationDisableAndEnable />
    </div>
  );
};

export default App;
