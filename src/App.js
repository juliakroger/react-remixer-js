import React, { useEffect, useState } from "react";
import Remixer from "@siteremix/remixer";
import SimpleRemixerAnimation from "./remixers/SimpleRemixerAnimation";
import SelectRemixerAnimate from "./remixers/SelectRemixerAnimate";
import SelectRemixerAnimateIn from "./remixers/SelectRemixerAnimateIn";
import SimpleRemixerAnimationDisableAndEnable from "./remixers/SimpleRemixerAnimationDisableAndEnable";
import "./App.css";

const App = () => {
  const [hasBorder, setHasBorder] = useState(false);
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

  const addBorderToCards = () => {
    if (hasBorder) {
      new Remixer(".card")
        .styles({
          border: "none",
          boxShadow: "none",
        })
        .run();
    } else {
      new Remixer(".card")
        .styles({
          border: "1px solid #909195",
          boxShadow: "0 0 4px 0 #909195",
        })
        .run();
    }

    setHasBorder(!hasBorder);
  };

  return (
    <div>
      <button className="button" onClick={addBorderToCards}>
        {hasBorder ? "Remove border from cards" : "Add border to cards"}
      </button>
      <div className="cards-row">
        <SimpleRemixerAnimation />
        <SelectRemixerAnimate />
        <SelectRemixerAnimateIn />
        <SimpleRemixerAnimationDisableAndEnable />
      </div>
    </div>
  );
};

export default App;
