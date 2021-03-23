import React, { useEffect } from "react";
import Remixer from "@siteremix/remixer";
import SimpleRemixerAnimation from "./remixers/SimpleRemixerAnimation";
import SelectRemixerAnimate from "./remixers/SelectRemixerAnimate";
import SelectRemixerAnimateIn from "./remixers/SelectRemixerAnimateIn";
import SimpleRemixerAnimationDisableAndEnable from "./remixers/SimpleRemixerAnimationDisableAndEnable";
import "./App.css";

const App = () => {
  useEffect(() => {
    new Remixer(".card")
      .styles({
        margin: "10px",
        padding: "10px",
        width: "300px",
        height: "300px",
        backgroundColor: "#20232a",
        borderRadius: "10px",
      })
      .run();
  }, []);

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
