import React, { useEffect } from "react";
import Remixer from "@siteremix/remixer";
import PlayButton from "../components/PlayButton";

const Remix = () => {
  useEffect(() => {
    runRemixer();
  }, []);

  const runRemixer = () => {
    new Remixer("#1").animate("tada", { duration: 3 }).run();
    new Remixer("#2").animate("flipX", { duration: 3 }).run();
    new Remixer("#3").animate("scaleUp", { duration: 3 }).run();
  };

  return (
    <div className="card row-column">
      <div>
        <h1 id="1">Hello :)</h1>
        <h1 id="2">How are you ?</h1>
        <h1 id="3">Bye</h1>
      </div>
      <PlayButton onClick={runRemixer} />
    </div>
  );
};

export default Remix;
